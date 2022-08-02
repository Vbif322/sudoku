import React from 'react'
import './Button.css'

function Button( {ArrToSend, Data, setData} ) {

    const Send = () => {
        console.log(ArrToSend)
        fetch(`http://109.68.212.241:8000/api/${ArrToSend}`)
        .then(res => res.json())
        .then((resp) => setData(resp.solution))
        console.log(Data)
    
    } 
    
  return (
    <div className='sendButton'>
    <button onClick ={Send}>Solve</button>
    </div>
  )
}

export default Button;