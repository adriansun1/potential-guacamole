import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Wrapper = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  borderRadius: '2px',
  backgroundColor: 'orange',
  position:'relative',
  zIndex:5,
});

export const Li = styled.li({
  display: '',
  margin: '10px',
  listStyleType: 'none',
});

export const Button = styled.button({
  zIndex:6,
})

export const NavigationLink = props => {
  const style = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '10px',
  };
  return (<NavLink style={style} {...props} />);
};

export const DrawerContainer = styled.div(({shouldBeOpen})=>({
  left: '0px',
  height: '100px',
  transform: `translateY(${shouldBeOpen? 0 : -200}px)`,
  width: '100%',
  backgroundColor:'pink',
  position:'absolute',
  transition:'all .2s ease-out',
  zIndex:4
}))
