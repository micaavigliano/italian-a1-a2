import type { Unit } from '../types';

interface NavigationProps {
  units: Unit[];
  currentUnit: number;
  showingVerbTable: boolean;
  onSelectUnit: (index: number) => void;
  onToggleVerbTable: () => void;
}

export function Navigation({ units, currentUnit, showingVerbTable, onSelectUnit, onToggleVerbTable }: NavigationProps) {
  return (
    <div className="nav">
      {units.map((u, i) => (
        <button
          key={u.id}
          className={`nav-btn ${i === currentUnit && !showingVerbTable ? 'active' : ''}`}
          onClick={() => onSelectUnit(i)}
        >
          <span className="unit-num">{u.level}</span> {i + 1}. {u.title.split('—')[0].trim()}
        </button>
      ))}
      <button
        className={`nav-btn ${showingVerbTable ? 'active' : ''}`}
        onClick={onToggleVerbTable}
        style={{
          background: showingVerbTable ? 'var(--accent)' : 'var(--card)',
          borderColor: showingVerbTable ? 'var(--accent)' : 'var(--border)',
          color: showingVerbTable ? 'white' : 'var(--text2)',
        }}
      >
        📊 Verb Table
      </button>
    </div>
  );
}
