import React from 'react';
import SudokuBoard from './components/SudokuBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mini Sudoku Game</h1>
      </header>
      <main>
        <SudokuBoard />
      </main>
    </div>
  );
}

export default App;
