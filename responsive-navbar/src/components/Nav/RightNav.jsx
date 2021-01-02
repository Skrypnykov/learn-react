import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  padding: 15px 0;

  li {
    padding: 0 10px;
    font-size: 1.2em;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: #0D2538;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
      padding: 15px 0;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
      <li>Sign In</li>
      <li>Sign Up</li>
    </Ul>
  )
}

export default RightNav