import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  display: flex;
  justify-content: space-between;
  
  .logo {
    padding: 15px;
    font-size: 1.3em;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Navbar
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar