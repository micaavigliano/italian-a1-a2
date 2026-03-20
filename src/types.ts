import type { ReactNode } from 'react';

export interface QuizQuestion {
  q: string;
  opts: string[];
  correct: number;
}

export interface Lesson {
  title: string;
  icon: string;
  content: ReactNode;
}

export interface Unit {
  id: number;
  level: string;
  title: string;
  desc: string;
  lessons: Lesson[];
  vocab: [string, string][];
  quiz: QuizQuestion[];
}

export interface Verb {
  inf: string;
  mean: string;
  type: string;
  presente: string[];
  passato: string[];
  imperfetto: string[];
  futuro: string[];
}
