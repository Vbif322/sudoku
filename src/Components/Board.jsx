import React from "react";
import "./Board.css";
import Cell from "./Cell";

/*  let Arr = [
    [-1, -1, -1, -1, -1, -1, 8, 3, -1],
    [-1, -1, -1, -1, 2, 8, -1, -1, 5],
    [2, -1, 4, -1, 7, -1, -1, 9, 6],
    [9, -1, 8, -1, -1, 4, 5, -1, 1],
    [-1, 6, -1, -1, -1, -1, 4, -1, 9],
    [-1, -1, -1, 6, -1, -1, -1, -1, 8],
    [6, 7, 2, -1, -1, 1, -1, 8, -1],
    [-1, 3, -1, -1, -1, 9, -1, 5, -1],
    [5, -1, -1, -1, -1, 7, -1, -1, -1],
  ]; */

  let Arr1 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

let a = [0,1,2,3,4,5,6,7,8];


function Board() {

    const [, setInputNum] = React.useState(0);
    console.log(Arr1[0]) 

  return (
    <div>
      <table>
          <tbody>
            {a.map((row,rIndex) => {
              return (
                <tr key={rIndex}>
                  {a.map((col,cIndex) => {
                    return (
                      <td key={rIndex + cIndex}>
                        <Cell Arr1 = {Arr1} row = {row} col = {col} setInputNum = {setInputNum} num = {Arr1[row][col] === 0 ? "" : Arr1[row][col]} />
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>    
    </div>
  );
}

export default Board;