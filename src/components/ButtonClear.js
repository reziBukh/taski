import React from 'react'

function ButtonClear({onClick, label}) {
  return (
    
    <button onClick={onClick} className='button' >{label}</button>
  
  )
}

export default ButtonClear