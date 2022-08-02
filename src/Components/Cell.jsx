import React from 'react'
import './Cell.css'



function Cell( { num, row, col, setInputNum, Data, CellClass } ) {
    

   const onInputHandler = (event) => {
    setInputNum(event)
    Data[row][col] = Number(event.target.value)

    }    

    return (
    <div className='Cell'>
        <input maxLength="1" onChange = {onInputHandler} defaultValue ={num} className={CellClass} />            
    </div>
  )
}

export default Cell;
