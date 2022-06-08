import React from "react";
import "./Board.css";
import Cell from "./Cell";

let Arr = [
    [-1, -1, -1, -1, -1, -1, 8, 3, -1],
    [-1, -1, -1, -1, 2, 8, -1, -1, 5],
    [2, -1, 4, -1, 7, -1, -1, 9, 6],
    [9, -1, 8, -1, -1, 4, 5, -1, 1],
    [-1, 6, -1, -1, -1, -1, 4, -1, 9],
    [-1, -1, -1, 6, -1, -1, -1, -1, 8],
    [6, 7, 2, -1, -1, 1, -1, 8, -1],
    [-1, 3, -1, -1, -1, 9, -1, 5, -1],
    [5, -1, -1, -1, -1, 7, -1, -1, -1],
  ];

function Board() {


  return (
    <div>
      <table>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((row,rIndex) => {
              return (
                <tr key={rIndex}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col,cIndex) => {
                    return (
                      <td key={rIndex + cIndex}>
                        <Cell num = {Arr[row][col] === -1 ? "" : Arr[row][col]} />
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
