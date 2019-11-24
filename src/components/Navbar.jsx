import React, { useState } from 'react';
import {
  NavigationLink,
  Button,
  ButtonContainer,
  Wrapper,
  DrawerContainer,
} from 'style/Navbar.style';
import uuid from 'uuid/v4';
import { Options } from 'shittydatabase';

const Drawer = ({ option, isOpen, optionName }) => {
  const shouldBeOpen = isOpen === optionName;

  return (
    <div>
      <DrawerContainer shouldBeOpen={shouldBeOpen}>
        {Object.keys(option).map(key => (
          <NavigationLink
            to={option[key].path || `/${optionName}/${key}`}
            key={uuid()}
          >
            {option[key].title || key}
          </NavigationLink>
        ))}
      </DrawerContainer>
    </div>
  );
};

const Navbar = () => {
  //TODO get options somehow
  const options = Options;
  
  const keys = Object.keys(options);
  const [isOpen, setIsOpen] = useState('');

  const clickHandler = optionName => {
    setIsOpen(isOpen === optionName ? '' : optionName);
  };

  return (
    <div>
      <Wrapper>
        {keys.map((key,index) => {
          return (
            <Drawer
              key={index}
              option={options[key]}
              isOpen={isOpen}
              clickHandler={clickHandler}
              optionName={key}
            />
          );
        })}
      </Wrapper>
      <ButtonContainer>
        {keys.map(key => {
          return <Button key={uuid()} onClick={() => clickHandler(key)}>{key}</Button>;
        })}
      </ButtonContainer>
    </div>
  );
};

export default Navbar;
