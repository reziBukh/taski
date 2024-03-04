import React from 'react'
import ButtonNext from './ButtonNext'
import ButtonClear from './ButtonClear'
import { FaArrowRightLong } from "react-icons/fa6";
import './index.css';
import ShowMoreText from './ShowMoreText';
import Checkbox from './Checkbox';
import Input from './Input';
import DropdownCheckbox1 from './DropdownCheckbox1';
import DropdownCheckbox2 from './DropdownCheckbox2';
import DropdownCheckbox3 from './DropdownCheckbox3';
import { useState } from 'react';



function Mtavari() {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleClear = () => {
    setInputValue('');
    setIsChecked(false);
    setSelectedOption('');
  };
  return (
    <div>
      <div className='dropdowncontainer'>
      <DropdownCheckbox1 selectedOption={selectedOption} onDropdownChange={handleDropdownChange} categoryheadline='Property category'/>
      <DropdownCheckbox2 selectedOption={selectedOption} onDropdownChange={handleDropdownChange} categoryheadline='Deal type'/>
      <DropdownCheckbox3 selectedOption={selectedOption} onDropdownChange={handleDropdownChange} categoryheadline='Repairs'/>
      </div>
      <div className='inputcontainer2'>
      <Input inputValue={inputValue} onInputChange={handleInput} placeholder={'name'}/>
      <Input inputValue={inputValue} onInputChange={handleInput} placeholder={'last name'}/>
      <Input inputValue={inputValue} onInputChange={handleInput} placeholder={'born year'}/>
      </div>
      <div className='inputcontainer1'>
      <Input placeholder={'gmail'}/>
      <Input placeholder={'phone number'}/>
      <Input placeholder={'address'}/>
      </div>
      <h1 className='amenities'>AMENITIES</h1>
      <div class="heading-container">
      <h2 className='popular'>Popular</h2>
      <h2 className='features'>Features</h2>
    </div>
      <div className='parent-container'>
  <div className='div1'>
    <Checkbox isChecked={isChecked} onCheckboxChange={handleCheckboxChange}  id="checkbox1" label='Wifi'/>
    <Checkbox isChecked={isChecked} onCheckboxChange={handleCheckboxChange} id="checkbox2" label='Free parking'/>
    <Checkbox isChecked={isChecked} onCheckboxChange={handleCheckboxChange} id="checkbox3" label='Hot tub'/>
  </div>

  <div className='div2'>
    <Checkbox isChecked={isChecked} onCheckboxChange={handleCheckboxChange} id="checkbox4" label='Beachfront'/>
    <Checkbox isChecked={isChecked} onCheckboxChange={handleCheckboxChange} id="checkbox5" label='Kitchen'/>
    <Checkbox isChecked={isChecked} onCheckboxChange={handleCheckboxChange} id="checkbox6" label='Washing machine'/>
  </div>

  <div className='div3'>
    <Checkbox isChecked={isChecked} onCheckboxChange={handleCheckboxChange} id="checkbox7" label='Wifi'/>
    <Checkbox isChecked={isChecked} onCheckboxChange={handleCheckboxChange} id="checkbox8" label='Free parking'/>
    <Checkbox isChecked={isChecked} onCheckboxChange={handleCheckboxChange} id="checkbox9" label='Hot tub'/>
  </div>

  <div className='div4'>
    <Checkbox id="checkbox10" label='Beachfront'/>
    <Checkbox id="checkbox11" label='Kitchen'/>
    <Checkbox id="checkbox12" label='Washing machine'/>
  </div>
</div>
irakli
   <ShowMoreText/>
    <ButtonClear onClick={handleClear} label='Clear'/>
    <ButtonNext label='NEXT' i={<FaArrowRightLong className='arrow'/>}/>

      
    </div>
  )
}

export default Mtavari
