import React from 'react'

function UnderlineText({label, onClick}) {
  return (
    <div>
      <p className='UnderlineText' onClick={onClick}>{label}</p>
    </div>
  )
}

export default UnderlineText
