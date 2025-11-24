import React from 'react';

interface InputProps {
  value: string;
  onChange: (val: string) => void;
  isSubmitted: boolean;
  isCorrect: boolean;
  hint?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, isSubmitted, isCorrect, hint }) => {
  let borderColor = "border-slate-300 focus:border-blue-500 focus:ring-blue-200";
  let textColor = "text-slate-800";
  let bgColor = "bg-white";

  if (isSubmitted) {
    if (isCorrect) {
      borderColor = "border-green-500 bg-green-50";
      textColor = "text-green-800 font-semibold";
    } else {
      borderColor = "border-red-500 bg-red-50";
      textColor = "text-red-800";
    }
  }

  return (
    <div className="inline-flex flex-col items-center align-bottom mx-1 mb-1 relative group">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={isSubmitted}
        className={`border-b-2 px-2 py-0.5 outline-none transition-all duration-200 text-center min-w-[80px] w-[140px] ${borderColor} ${textColor} ${bgColor} rounded-t-md disabled:opacity-100 disabled:bg-opacity-100`}
        autoComplete="off"
        spellCheck="false"
      />
      {hint && (
        <span className={`text-[10px] text-slate-500 mt-1 font-medium transition-opacity ${isSubmitted ? 'opacity-50' : 'opacity-100'}`}>
          ({hint})
        </span>
      )}
      
      {/* Validation Icon */}
      {isSubmitted && (
        <div className="absolute -right-5 top-0.5">
          {isCorrect ? (
             <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          ) : (
             <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path></svg>
          )}
        </div>
      )}
    </div>
  );
};

export default Input;