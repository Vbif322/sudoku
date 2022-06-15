import React from 'react'
import './Cell.css'



function Cell( { num, row, col, setInputNum, Arr, CellClass } ) {
    
    /* if (Arr[row][col] === 1) {
        CellClass = 'CellInputWrong'
    } */

   const onInputHandler = (event) => {
    setInputNum(event)
    Arr[row][col] = Number(event.target.value)

    }


    

    return (
    <div className='Cell'>
        <input maxLength="1" onChange = {onInputHandler} defaultValue ={num} className={CellClass} />            
    </div>
  )
}

export default Cell;
