import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div({
  backgroundColor:'#282c34',
  zIndex: 10,
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',

})

const Header = () => {
  return (
    <Container>
      <input type="text"/>
      <p>search here</p>
    </Container>
  )
}

export default Header
