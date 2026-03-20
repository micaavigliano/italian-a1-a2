import { useState } from 'react';
import { COURSE } from './data/courseData';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { UnitView } from './components/UnitView';
import { VerbTable } from './components/VerbTable';

function App() {
  const [currentUnit, setCurrentUnit] = useState(0);
  const [showingVerbTable, setShowingVerbTable] = useState(false);

  const handleSelectUnit = (index: number) => {
    setShowingVerbTable(false);
    setCurrentUnit(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleVerbTable = () => {
    setShowingVerbTable(prev => !prev);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = 0;

  return (
    <div className="app">
      <Header progress={progress} />
      <Navigation
        units={COURSE}
        currentUnit={currentUnit}
        showingVerbTable={showingVerbTable}
        onSelectUnit={handleSelectUnit}
        onToggleVerbTable={handleToggleVerbTable}
      />
      {showingVerbTable ? (
        <VerbTable />
      ) : (
        <UnitView
          unit={COURSE[currentUnit]}
          unitIndex={currentUnit}
          totalUnits={COURSE.length}
          onPrev={() => handleSelectUnit(currentUnit - 1)}
          onNext={() => handleSelectUnit(currentUnit + 1)}
        />
      )}
    </div>
  );
}

export default App;
