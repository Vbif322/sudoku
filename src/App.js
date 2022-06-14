import "./App.css";
import React from "react";
import Board from "./Components/Board";
import Button from "./Components/Button"

let Arr = [
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

function App() { 
    
    const [, setInputNum] = React.useState(0);
    let ArrToSend = Arr.join('')  
    for (let i=0;ArrToSend.length>i;i++)
        ArrToSend = ArrToSend.replace(',','')

  return (
    <div className="container">
      <div className="header">
        <h1>Sudoku Solver</h1>
        <Board Arr={Arr} ArrToSend={ArrToSend} setInputNum={setInputNum}/>        
      </div>
      <div>
        <Button ArrToSend={ArrToSend}/>
      </div>
    </div>
  );
}

export default App;
