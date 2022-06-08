import React from "react";
import "./Board.css";
import Cell from "./Cell";

function Board() {

  return (
    <div>
      <table>
          <tbody>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((rIndex) => {
              return (
                <tr key={rIndex}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((cIndex) => {
                    return (
                      <td key={rIndex + cIndex}>
                        <Cell />
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
