interface HeaderProps {
  progress: number;
}

export function Header({ progress }: HeaderProps) {
  return (
    <>
      <div className="header">
        <h1>Impara l'<span>Italiano</span></h1>
        <p>An A1 to A2 summary · 12 Units · Grammar, Verbs & Vocabulary</p>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }} />
      </div>
    </>
  );
}
