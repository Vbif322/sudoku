import React from "react";
import "./Board.css";
import Cell from "./Cell";

let a = [0,1,2,3,4,5,6,7,8];


function Board( {Arr, setInputNum} ) {

  let board = [];
  let CellClass = 'CellInput'

  for (let i =0; i<a.length;i++)
    for (let j=0; j<a.length;j++)
    if (Arr[i][j] === 1) {
      CellClass = 'CellInputWrong'
      board.push(
        <Cell Arr = {Arr} row = {i} col = {j} setInputNum = {setInputNum} num = {Arr[i][j] === 0 ? "" : Arr[i][j]} CellClass = {CellClass}/>
      )
    } else {
      CellClass = 'CellInput'
      board.push(
        <Cell Arr = {Arr} row = {i} col = {j} setInputNum = {setInputNum} num = {Arr[i][j] === 0 ? "" : Arr[i][j]} CellClass = {CellClass}/>
      )
    }

    
  return (
    <div className="Board1">
      {board}
    </div>
  );
}

export default Board;