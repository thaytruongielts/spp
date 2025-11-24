import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { EXERCISE_DATA } from './questions';
import Input from './components/Input';
import { UserAnswers, QuestionPart, BlankSegment } from './types';

// Helper to identify blank segments
function isBlank(part: QuestionPart): part is BlankSegment {
  return (part as BlankSegment).id !== undefined;
}

const App: React.FC = () => {
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  // Initialize total questions count
  const totalQuestions = useMemo(() => {
    return EXERCISE_DATA.reduce((acc, section) => acc + section.questions.length, 0);
  }, []);

  const handleInputChange = (blankId: string, value: string) => {
    if (isSubmitted) return;
    setAnswers(prev => ({
      ...prev,
      [blankId]: value
    }));
  };

  const calculateScore = useCallback(() => {
    let correctCount = 0;

    EXERCISE_DATA.forEach(section => {
      section.questions.forEach(q => {
        // A question is correct ONLY if all its blanks are correct
        const blanks = q.parts.filter(isBlank);
        
        const allBlanksCorrect = blanks.every(blank => {
          const userAnswer = (answers[blank.id] || "").trim();
          // Case sensitive check as per grammar requirements
          return blank.correctAnswers.some(ans => ans === userAnswer);
        });

        if (allBlanksCorrect) {
          correctCount++;
        }
      });
    });

    const score = (correctCount / totalQuestions) * 10;
    // Round to 2 decimal places for display
    return {
      correctQuestions: correctCount,
      totalQuestions,
      finalScore: Math.round(score * 100) / 100
    };
  }, [answers, totalQuestions]);

  const handleSubmit = () => {
    // Removed window.confirm as it can be blocked in some environments
    setIsSubmitted(true);
    setShowScoreModal(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    // Directly reset without confirmation to avoid browser blocking issues
    setAnswers({});
    setIsSubmitted(false);
    setShowScoreModal(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scoreData = useMemo(() => isSubmitted ? calculateScore() : null, [isSubmitted, calculateScore]);

  // Prevent accidental navigation when in progress
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isSubmitted && Object.keys(answers).length > 0) {
        e.preventDefault();
        e.returnValue = '';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [answers, isSubmitted]);

  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-slate-800">Simple Present Tense</h1>
            <p className="text-sm text-slate-500">30 Questions • 10 Point Scale</p>
          </div>
          {isSubmitted && scoreData && (
             <div className="text-right">
                <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Score</div>
                <div className={`text-2xl font-bold ${scoreData.finalScore >= 5 ? 'text-green-600' : 'text-red-500'}`}>
                  {scoreData.finalScore} <span className="text-sm text-slate-400">/ 10</span>
                </div>
             </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        
        {EXERCISE_DATA.map((section) => (
          <section key={section.id} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
              <h2 className="text-lg font-bold text-slate-800">{section.title}</h2>
              <p className="text-slate-600 text-sm mt-1 italic">{section.instruction}</p>
            </div>
            
            <div className="divide-y divide-slate-100">
              {section.questions.map((q, index) => {
                // Determine if this specific question is correct (for styling the container row)
                let isRowCorrect = false;
                let isRowWrong = false;
                
                if (isSubmitted) {
                   const blanks = q.parts.filter(isBlank);
                   const allCorrect = blanks.every(b => 
                      b.correctAnswers.includes((answers[b.id] || "").trim())
                   );
                   if (allCorrect) isRowCorrect = true;
                   else isRowWrong = true;
                }

                return (
                  <div key={q.id} className={`px-6 py-5 transition-colors duration-300 ${isRowCorrect ? 'bg-green-50/30' : ''} ${isRowWrong ? 'bg-red-50/30' : ''}`}>
                    <div className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-200 text-slate-600 text-sm font-bold">
                        {q.id}
                      </span>
                      <div className="flex-grow text-lg leading-loose text-slate-800">
                        {q.parts.map((part, i) => {
                          if (isBlank(part)) {
                            const isCorrect = isSubmitted && part.correctAnswers.includes((answers[part.id] || "").trim());
                            return (
                              <Input
                                key={part.id}
                                value={answers[part.id] || ""}
                                onChange={(val) => handleInputChange(part.id, val)}
                                isSubmitted={isSubmitted}
                                isCorrect={isCorrect}
                                hint={part.hint}
                              />
                            );
                          }
                          return <span key={i} className="whitespace-pre-wrap">{part.text}</span>;
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      {/* Footer / Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-slate-200 p-4 shadow-lg z-20">
        <div className="max-w-3xl mx-auto flex gap-4 justify-end">
          {isSubmitted ? (
            <button 
              onClick={handleReset}
              className="px-6 py-3 rounded-lg font-semibold bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
            >
              Reset Exercise
            </button>
          ) : (
            <>
               <div className="flex-grow text-sm text-slate-500 flex items-center">
                 Answer all blanks before submitting.
               </div>
              <button 
                onClick={handleSubmit}
                className="px-8 py-3 rounded-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200 transition-all hover:-translate-y-0.5"
              >
                Submit Answers
              </button>
            </>
          )}
        </div>
      </div>

      {/* Score Modal */}
      {showScoreModal && scoreData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 text-center transform transition-all scale-100">
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 text-3xl font-bold border-4 ${scoreData.finalScore >= 5 ? 'border-green-500 text-green-600 bg-green-50' : 'border-red-500 text-red-600 bg-red-50'}`}>
              {scoreData.finalScore}
            </div>
            
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {scoreData.finalScore >= 8 ? "Excellent Work!" : scoreData.finalScore >= 5 ? "Good Effort!" : "Keep Practicing!"}
            </h2>
            
            <p className="text-slate-600 mb-8">
              You correctly answered <strong className="text-slate-900">{scoreData.correctQuestions}</strong> out of <strong className="text-slate-900">{scoreData.totalQuestions}</strong> questions.
            </p>

            <button 
              onClick={() => setShowScoreModal(false)}
              className="w-full py-3 rounded-lg font-semibold bg-slate-900 text-white hover:bg-slate-800 transition-colors"
            >
              Review Answers
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;