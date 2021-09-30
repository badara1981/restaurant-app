import React from 'react';
import { Link } from "react-scroll";
import styled from 'styled-components';

import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiMail } from "react-icons/fi";
import { AiFillPhone } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

export default function Footer(){
  return (
    <FooterContainer>
      <FooterWrap>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              // exact='true'
              offset={-80}
              >il RITROVO
            </SocialLogo>

            <SocialIcons>

              <SocialItem>
                <SocialIconLink href='https://www.google.com/maps/place/Il+Ritrovo+-+Cucina+Casalinga+Popolare/@52.5095959,13.4581123,15z/data=!4m5!3m4!1s0x0:0xb7ef9eca691d71ec!8m2!3d52.5095959!4d13.4581123'>
                  <HiLocationMarker />
                  <p>Gabriel-Max-Straße 2, 10245 Berlin‬</p>
                </SocialIconLink>
              </SocialItem>

              <SocialItem>
                  <AiFillPhone />
                  <p>‭030 293 641 30‬‬</p>
              </SocialItem>

              <SocialItem>
                <SocialIconLink href="https://www.facebook.com/pages/Il-Ritrovo-Trattoria-Berlin-Fhain/210186225725262">
                  <FaFacebook />
                </SocialIconLink>
              </SocialItem>

              <SocialItem>
                <SocialIconLink href='https://www.instagram.com/explore/locations/443784/il-ritrovo/'>
                  <FaInstagram />
                </SocialIconLink>
              </SocialItem>

              <SocialItem>
                <a href="mailto:ilritrovo@gmx.de">
                  <FiMail />
                </a>
              </SocialItem>

            </SocialIcons>

          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};


export const FooterContainer = styled.footer`
  background-color: #0d0909;
`;

export const FooterWrap = styled.div`
height: 300px;
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.div`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  display:flex;
  svg{
    font-size: 28px;
  }
`;

export const SocialItem = styled.div`
  color: #fff;
  font-size: 20px;
  display: flex;
  align-items: center;
  margin: 0 15px;
  svg{
    font-size: 28px;
  }

`