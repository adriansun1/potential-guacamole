import React, { useState } from 'react';
import styled from '@emotion/styled';
import { NavigationLink, Li, Wrapper, Drawer } from 'style/Navbar.style';
import uuid from 'uuid/v4';

const Navbar = () => {
  //get options somehow
  const options = {
    option: {
      subOption: {
        title: 'japanese',
      },
      subOption2:{
        title: 'title',
        path: '/path/path'
      }
    }

  };
  const [isOpen, setIsOpen] = useState(false);
  const [currentOption, setCurrentOption] = useState([]);

  const clickHandler = (e) => {
    if(!isOpen){
      setCurrentOption(['stringo strango'])
    }
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Wrapper>
        <button onClick={clickHandler}>toggle drawer</button>
        <button onClick={clickHandler}>toggle drawer</button>
        <button onClick={clickHandler}>toggle drawer</button>
      </Wrapper>
      <Drawer isOpen={isOpen}>
        <Wrapper>
          {currentOption.map((name)=>(
            <div>{name}</div>
            // <NavigationLink to='/somethjing' key={uuid()}>
            //   place
            // </NavigationLink>
          ))}
        </Wrapper>
      </Drawer>
    </div>
  );
};

export default Navbar;
