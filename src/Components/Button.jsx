import React from 'react'
import './Button.css'

function Button( {ArrToSend} ) {
    const Send = () => {
        console.log(ArrToSend)
    }
  return (
    <div className='sendButton'>
    <button onClick ={Send}>Solve</button>
    </div>
  )
}

export default Button;