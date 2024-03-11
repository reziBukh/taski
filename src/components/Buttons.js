import React from 'react';
import { useHistory } from 'react-router-dom';
function Buttons({label,i, onClick}) {

  return (
    
    <button onClick={onClick} className='button'>{label}{i}</button>
  
  )
}

export default Buttons;
