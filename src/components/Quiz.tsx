import { useState } from 'react';
import type { QuizQuestion } from '../types';

interface QuizProps {
  questions: QuizQuestion[];
  unitIndex: number;
}

export function Quiz({ questions, unitIndex }: QuizProps) {
  const [answers, setAnswers] = useState<Record<string, number | true>>({});

  const handleAnswer = (qKey: string, chosen: number, correct: number) => {
    if (answers[qKey] !== undefined) return;
    setAnswers(prev => ({
      ...prev,
      [qKey]: chosen === correct ? true : chosen,
    }));
  };

  return (
    <div className="lesson">
      <h3><span className="icon" aria-hidden="true">✅</span> Practice Quiz</h3>
      {questions.map((q, qi) => {
        const qKey = `${unitIndex}-${qi}`;
        const answered = answers[qKey] !== undefined;
        const isCorrect = answers[qKey] === true;

        return (
          <div key={qKey} className="quiz-box" style={{ marginBottom: '14px' }}>
            <h4>Question {qi + 1}</h4>
            <div className="quiz-question">{q.q}</div>
            <div className="quiz-options">
              {q.opts.map((opt, oi) => {
                let cls = '';
                if (answered) {
                  if (oi === q.correct) cls = 'correct';
                  else if (answers[qKey] === oi) cls = 'wrong';
                }
                return (
                  <button
                    key={oi}
                    className={`quiz-opt ${cls}`}
                    disabled={answered}
                    onClick={() => handleAnswer(qKey, oi, q.correct)}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {answered && (
              <div className={`quiz-feedback ${isCorrect ? 'correct' : 'wrong'}`}>
                {isCorrect
                  ? '✓ Corretto! Bravo/a!'
                  : '✗ Non esatto. The correct answer is highlighted above.'}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
