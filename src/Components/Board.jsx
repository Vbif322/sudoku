import React from "react";
import "./Board.css";
import Cell from "./Cell";

let a = [0,1,2,3,4,5,6,7,8];


function Board( {Arr, setInputNum} ) {

    
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
                        <Cell Arr = {Arr} row = {row} col = {col} setInputNum = {setInputNum} num = {Arr[row][col] === 0 ? "" : Arr[row][col]} />
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