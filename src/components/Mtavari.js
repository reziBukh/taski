import React, { useState } from 'react';
import Buttons from './Buttons';
import { FaArrowRightLong } from "react-icons/fa6";
import './index.css';
import UnderlineText from './UnderlineText';
import Checkbox from './Checkbox';
import Input from './Input';
import DropdownCheckbox from './DropdownCheckbox';


function Mtavari() {
  const option1 = [
    { value: "small house" },
    { value: "big house" },
    { value: "standart house" }
  ];
  const option2 = [
    { value: "for sell" },
    { value: "for rent" },
    { value: "for giraoba" }
  ];
  const option3 = [
    { value: "hight class" },
    { value: "standard class" },
    { value: "low class" }
  ];

  const [newCheckboxes,setnewCheckboxes] = useState(false);
  
  const NewCheckbox = () => {
    setnewCheckboxes(!newCheckboxes);
  };


  return (
    <div>
      <div className='dropdowncontainer'>
        <DropdownCheckbox categoryheadline='Property category'  label={option1}/>
        <DropdownCheckbox categoryheadline='Deal type'  label={option2}/>
        <DropdownCheckbox categoryheadline='Repairs'  label={option3}/>
      </div>
      <div className='inputcontainer2'>
        <Input  placeholder={'name'}/>
        <Input  placeholder={'last name'}/>
        <Input  placeholder={'born year'}/>
      </div>
      <div className='inputcontainer1'>
        <Input  placeholder={'gmail'}/>
        <Input  placeholder={'phone number'}/>
        <Input  placeholder={'address'}/>
      </div>
      <h1 className='amenities'>AMENITIES</h1>
      <div className="heading-container">
        <h2 className='popular'>Popular</h2>
        <h2 className='features'>Features</h2>
      </div>
      <div className='parent-container'>
        <div className='div1'>
          <Checkbox id="checkbox1" label='Wifi'/>
          <Checkbox id="checkbox2" label='Free parking'/>
          <Checkbox id="checkbox3" label='Hot tub'/>
        </div>
        <div className='div2'>
          <Checkbox id="checkbox4" label='Beachfront'/>
          <Checkbox id="checkbox5" label='Kitchen'/>
          <Checkbox id="checkbox6" label='Washing machine'/>
        </div>
        <div className='div3'>
          <Checkbox id="checkbox7" label='Wifi'/>
          <Checkbox id="checkbox8" label='Free parking'/>
          <Checkbox id="checkbox9" label='Hot tub'/>
        </div>
        <div className='div4'>
          <Checkbox id="checkbox10" label='Beachfront'/>
          <Checkbox id="checkbox11" label='Kitchen'/>
          <Checkbox id="checkbox12" label='Washing machine'/>
        </div>
      </div>
      {newCheckboxes && (
        <div className='parent-container'>
          <div className='div1'>
          <Checkbox id="checkbox13" label='Wifi'/>
          <Checkbox id="checkbox14" label='Free parking'/>
          <Checkbox id="checkbox15" label='Hot tub'/>
        </div>
        <div className='div2'>
          <Checkbox id="checkbox16" label='Beachfront'/>
          <Checkbox id="checkbox17" label='Kitchen'/>
          <Checkbox id="checkbox18" label='Washing machine'/>
        </div>
        <div className='div3'>
          <Checkbox id="checkbox19" label='Wifi'/>
          <Checkbox id="checkbox20" label='Free parking'/>
          <Checkbox id="checkbox21" label='Hot tub'/>
        </div>
        <div className='div4'>
          <Checkbox id="checkbox22" label='Beachfront'/>
          <Checkbox id="checkbox23" label='Kitchen'/>
          <Checkbox id="checkbox24" label='Washing machine'/>
        </div>
        </div>
      )}
      <UnderlineText label='show more' onClick={NewCheckbox}/>
      <Buttons label='Clear' />
      <Buttons label='NEXT' i={<FaArrowRightLong className='arrow'/>}/>
    </div>
  );
}

export default Mtavari;
