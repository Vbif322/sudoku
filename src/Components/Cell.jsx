import React from 'react'
import './Cell.css'


function Cell( { num, row, col, setInputNum, Arr1 } ) {
    
   const onInputHandler = (event) => {
    setInputNum(event.target.value)
    Arr1[row][col] = Number(event.target.value)
       
   }



    return (
    <div className='Cell'>
        <input onChange = {onInputHandler} defaultValue ={num} className='CellInput' />            
    </div>
  )
}

export default Cell;
