import React from 'react'
import './Reset.css'

function Reset ( {setData, Data, Arr} ) {

    const Reset = () => {
        setData(Arr);
        console.log(Data)
    }
    
  return (
    <div className='resetButton'>
    <button onClick = {Reset}>Reset</button>
    </div>
  )
}

export default Reset;
