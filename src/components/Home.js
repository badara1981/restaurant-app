import React from 'react';
import styled from 'styled-components';

import backgroundImage from './images/443784.jpg';

const Home = () => {
  return (
    <HomeContainer id="home">
      <HomeContent>
          <HomeH1>il RITROVO</HomeH1>
          <HomeH2>Cucina Casalinga  <span>Popolare</span></HomeH2>
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;

export const HomeContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.1)), url(${backgroundImage});
  /* background: linear-gradient(to right, rgba(190,140, 0), rgba(250,190, 0, 0.6)); */
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HomeContent = styled.div`
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 10rem;
  color: #fff;
  line-height: 1;

`;

export const HomeH1 = styled.h1`
  font-family: 'Futura PT', sans-serif;
  font-size: 6rem;
  color: white;
  font-weight: bold;
  margin-bottom: 1rem;
  letter-spacing: 3px;
`;

export const HomeH2 = styled.p`
  font-size: clamp(3.5rem, 12vw, 3rem);
  font-family: 'Mistral';
  font-style: italic;
  margin-bottom: 2rem;
  span{
    font-family: 'Mistral';
    color: red;
  }
`;
