import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggle, setLanguage }) => {

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <div>
        <LangBtn onClick={() => {setLanguage('de')}}>DE</LangBtn>
        <LangBtn onClick={() => {setLanguage('it')}}>IT</LangBtn>
        {/* <HomeBtn onClick={() => {setLanguage('en')}}>EN</HomeBtn> */}
      </div>

        <SidebarMenu>
          <SidebarLink to="pizza-menu"
            smooth={true}
            duration={500}
            spy={true}
            >Pizzas
          </SidebarLink>

          <SidebarLink to="salat-menu"
            smooth={true}
            duration={500}
            spy={true}
            >Salat
          </SidebarLink>

          <SidebarLink to="drinks-menu"
            smooth={true}
            duration={500}
            spy={true}
            >Gentränke
          </SidebarLink>
        </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute onClick={scrollToBottom}
            >CONTACT US</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

export const SidebarContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 350px;
  height: 100%;
  background: #ffaa00;
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-1000px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

`;

export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background: #e31837;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;
`;

export const LangBtn = styled.button`
  font-size: 1.1rem;
  width: 2rem;
  height: 2rem;
  margin:.5rem;
  border: none;
  background: #11CC55;
  color: #fff;
  transition: 0.2s ease-out;
`;