import React from 'react'
import './Cell.css'


function Cell( { num, row, col, setInputNum, Arr } ) {
    
   const onInputHandler = (event) => {
    setInputNum(event)
    Arr[row][col] = Number(event.target.value)
       
   }

    return (
    <div className='Cell'>
        <input maxLength="1" onChange = {onInputHandler} defaultValue ={num} className='CellInput' />            
    </div>
  )
}

export default Cell;
