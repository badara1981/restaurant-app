import React from 'react';
import styled from 'styled-components';
import { FaPizzaSlice } from 'react-icons/fa';

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <NavIcon onClick={toggle}>
        <p>MENU</p>
      </NavIcon>
    </Nav>
  );
};

export default Navbar;

export const Nav = styled.nav`
  position: fixed; 
  top: 0;
  width: 100%; 

`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-100%, 100%);
    font-size: 24px;
    font-weight: bold;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
