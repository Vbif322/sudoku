import "./App.css";
import React from "react";
import Board from "./Components/Board";

let Arr = [
  [-1, -1, -1, -1, -1, -1, 8, 3, -1],
  [-1, -1, -1, -1, 2, 8, -1, -1, 5],
  [2, -1, 4, -1, 7, -1, -1, -1, 6],
  [9, -1, 8, -1, -1, 4, 5, -1, 1],
  [-1, 6, -1, -1, -1, -1, 4, -1, 9],
  [-1, -1, -1, 6, -1, -1, -1, -1, 8],
  [6, 7, 2, -1, -1, 1, -1, 8, -1],
  [-1, 3, -1, -1, -1, 9, -1, 5, -1],
  [5, -1, -1, -1, -1, 7, -1, -1, -1],
];

function App() {
  //const [SudokuArr, setSudokuArr] = React.useState();

  //console.log(...Array(9).keys());

  return (
    <div className="container">
      <div className="header">
        <h1>Sudoku Solver</h1>
        <Board />
      </div>
    </div>
  );
}

export default App;
