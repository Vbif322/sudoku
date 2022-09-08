import "./App.css";
import React from "react";
import Board from "./Components/Board";
import Button from "./Components/Button";
import Reset from "./Components/Reset";


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
   
    const [Data, setData] = React.useState(Arr);

    const [, setInputNum] = React.useState(0);
    let ArrToSend = Data.join('')  
    for (let i=0;ArrToSend.length>i;i++)
        ArrToSend = ArrToSend.replace(',','');
    
    

  return (
    <div className="container">
      <div className="header">
        <h1>Sudoku Solver</h1>
        <Board Data={Data} ArrToSend={ArrToSend} setInputNum={setInputNum}/>        
      </div>
      <div className="app__buttons">
        <Button ArrToSend={ArrToSend} Data={Data} setData={setData}/>
        <Reset setData = {setData} Arr={Arr} Data={Data}/>
      </div>
    </div>
  );
}

export default App;
