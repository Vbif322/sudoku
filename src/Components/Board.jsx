import React from "react";
import "./Board.css";
import Cell from "./Cell";

let a = [0,1,2,3,4,5,6,7,8];


function Board( {setInputNum, Data} ) {

  let board = [];
  let CellClass = 'CellInput'
  
  for (let i =0; i<a.length;i++)
    for (let j=0; j<a.length;j++)
    if (Data[i][j] === -1) {
      CellClass = 'CellInputWrong'
      board.push(
        <Cell key={''+i+j} Data = {Data} row = {i} col = {j} setInputNum = {setInputNum} num = {Data[i][j] === 0 ? "" : Data[i][j]} CellClass = {CellClass}/>
      )
    } else {
      CellClass = 'CellInput'
      board.push(
        <Cell key={''+i+j} Data = {Data} row = {i} col = {j} setInputNum = {setInputNum} num = {Data[i][j] === 0 ? "" : Data[i][j]} CellClass = {CellClass}/>
      )
    }

    
  return (
    <div className="Board1">
      {board}
    </div>
  );
}

export default Board;