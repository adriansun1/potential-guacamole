import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { relative } from 'path';

const Wrapper = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  borderRadius: '2px',
  backgroundColor: 'orange',
  position:'relative',
  zIndex:5,
});

const Li = styled.li({
  display: '',
  margin: '10px',
  listStyleType: 'none',
});

const NavigationLink = props => {
  const style = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '10px',
  };
  return (<NavLink style={style} {...props} />);
};

const Drawer = styled.div(({isOpen})=>({
  height: '100px',
  transform: `translateY(${isOpen ? 0 : -200}px)`,
  width: '100%',
  backgroundColor:'pink',
  position:'absolute',
  transition:'all .2s ease-out',
  zIndex:4
}))


export {
  Li,
  Wrapper,
  NavigationLink,
  Drawer
}
