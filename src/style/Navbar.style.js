import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

const barHeight = '40px';

export const Wrapper = styled.ul({
  display: 'flex',
  margin: 0,
  padding: 0,
  borderRadius: '2px',
  backgroundColor: 'orange',
  position:'relative',
});

export const Li = styled.li({
  display: '',
  margin: '10px',
  listStyleType: 'none',
});

export const Button = styled.button({
  height: barHeight,
  fontSize:'30px',
  border: '0',
  margin:'0px 5px',
})

export const ButtonContainer = styled.div({
  display:'flex',
  position:'relative',
  backgroundColor:'white',
  zIndex:'3',
});

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
  top: barHeight,
  height: '100px',
  transform: `translateY(${shouldBeOpen? 0 : -200}px)`,
  width: '100%',
  backgroundColor:'pink',
  position:'absolute',
  transition:'all .2s ease-out',
  zIndex:'2',
  display:'flex',
}))
