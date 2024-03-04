import React from 'react'

function Checkbox({label,id}) {
  return (
    <div className="checkbox-container">
        <input id={id} type='checkbox' className='custom-checkbox'></input>
        <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default Checkbox
