import React from 'react';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import ProgressBar from './components/ProgressBar';

function App() {
  return (
    <div className="App">
      <ProgressBar />
      <PersonalInfo />
    </div>
  );
}

export default App;
