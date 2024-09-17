import React, { useState } from 'react';
import CandidateSearch from './components/CandidateSearch';
import SavedCandidates from './components/SavedCandidates';
import './App.css';

function App() {
  const [view, setView] = useState<'search' | 'saved'>('search'); // View state

  return (
    <div className="App">
      <nav className="navbar">
        {/* Navigation buttons */}
        <ul>
          <li>
            <button onClick={() => setView('search')}>Home</button> {/* Home button */}
          </li>
          <li>
            <button onClick={() => setView('saved')}>Potential Candidates</button> {/* Saved candidates */}
          </li>
        </ul>
      </nav>

      {/* Conditional rendering based on the current view */}
      <main>
        {view === 'search' ? <CandidateSearch /> : <SavedCandidates />}
      </main>
    </div>
  );
}

export default App;
