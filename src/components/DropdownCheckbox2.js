import React from 'react'

const options = [
  { value: "small house" },
  { value: "big house" },
  { value: "standart house" }
];

function DropdownCheckbox2({ categoryheadline }) {
  return (
    <div>
      <select className='DropdownCheckbox'>
        <option label={categoryheadline}></option>
        {options.map((x, index) => (
          <option key={index} value={x.value}>{x.value}</option>
        ))}
      </select>
    </div>
  );
}

export default DropdownCheckbox2;

