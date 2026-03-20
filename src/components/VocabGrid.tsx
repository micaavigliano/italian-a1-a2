import { useState } from 'react';

interface VocabGridProps {
  vocab: [string, string][];
  unitIndex: number;
}

export function VocabGrid({ vocab, unitIndex }: VocabGridProps) {
  const [revealed, setRevealed] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setRevealed(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="lesson">
      <h3><span className="icon" aria-hidden="true">📚</span> Vocabulary (Tap to reveal)</h3>
      <div className="vocab-grid">
        {vocab.map(([word, translation], vi) => {
          const key = `${unitIndex}-${vi}`;
          const hidden = !revealed[key];
          return (
            <div
              key={key}
              className={`vocab-card ${hidden ? 'hidden' : ''}`}
              onClick={() => toggle(key)}
            >
              <span className="word">{word}</span>
              <span className="trans">{translation}</span>
              {hidden && <span className="hint">tap</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
