import React,{useState} from 'react'

function Input({placeholder, onChange}) {
  const [input, setinput]=useState('');
  const inputchange=(event)=>{
    setinput(event.target.value);
    if (onChange){
      onChange(event.target.value);
    }
  };

  return (
    <div>
      <input className='input' value={input} onChange={inputchange} placeholder={placeholder}></input>
    </div>
  )
}

export default Input
