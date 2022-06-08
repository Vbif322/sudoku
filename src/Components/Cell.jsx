import React from 'react'
import './Cell.css'


function Cell( {num} ) {
    return (
    <div className='Cell'>
        <input defaultValue ={num} className='CellInput'></input>            
    </div>
  )
}

export default Cell;
