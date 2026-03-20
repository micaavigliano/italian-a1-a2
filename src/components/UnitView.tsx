import type { Unit } from '../types';
import { VocabGrid } from './VocabGrid';
import { Quiz } from './Quiz';

interface UnitViewProps {
  unit: Unit;
  unitIndex: number;
  totalUnits: number;
  onPrev: () => void;
  onNext: () => void;
}

export function UnitView({ unit, unitIndex, totalUnits, onPrev, onNext }: UnitViewProps) {
  return (
    <div className="unit-page">
      <div className="unit-header">
        <span className={`level-badge level-${unit.level.toLowerCase()}`}>{unit.level}</span>
        <h2>Unit {unit.id}: {unit.title}</h2>
        <p>{unit.desc}</p>
      </div>

      {unit.lessons.map((lesson, li) => (
        <div key={li} className="lesson">
          <h3><span className="icon">{lesson.icon}</span> {lesson.title}</h3>
          {lesson.content}
        </div>
      ))}

      <VocabGrid vocab={unit.vocab} unitIndex={unitIndex} />
      <Quiz questions={unit.quiz} unitIndex={unitIndex} />

      <div className="footer-nav">
        <button
          className="footer-btn"
          disabled={unitIndex === 0}
          onClick={onPrev}
        >
          ← Previous Unit
        </button>
        <button
          className="footer-btn primary"
          disabled={unitIndex === totalUnits - 1}
          onClick={onNext}
        >
          Next Unit →
        </button>
      </div>
    </div>
  );
}
