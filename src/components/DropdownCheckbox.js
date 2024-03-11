import React from 'react';


function DropdownCheckbox({ categoryheadline,label }) {
  return (
    <div>
      <select className='DropdownCheckbox'>
        <option label={categoryheadline}></option>
        {label.map((option, index) => (
          <option key={index} value={option.value}>{option.value}</option>
        ))}
      </select>
    </div>
  );
}

export default DropdownCheckbox;
