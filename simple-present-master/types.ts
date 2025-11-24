export interface BlankSegment {
  hint?: string; // e.g. (be), (not/do)
  correctAnswers: string[]; // Allowed correct answers
  id: string; // unique identifier for the blank
}

export interface TextSegment {
  text: string;
}

export type QuestionPart = TextSegment | BlankSegment;

export interface Question {
  id: number;
  parts: QuestionPart[];
}

export interface Section {
  id: string;
  title: string;
  instruction: string;
  questions: Question[];
}

export type UserAnswers = Record<string, string>; // blankId -> value