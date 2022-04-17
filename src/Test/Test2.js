import React,{useState} from 'react';
import * as STC from './test2.style.js';


const Test2 = () => {

  const [toggle, setToggle] = useState(true);

  return(
    
      <STC.ToggleContainer>
        <STC.ToggleBtn isSelected={toggle}>기본</STC.ToggleBtn>
        <STC.ToggleBtn isSelected={!toggle}>상세</STC.ToggleBtn>
      </STC.ToggleContainer>
    
  );
}

export default Test2;