import React from 'react';
import styled, { keyframes } from 'styled-components';
import tarjetas from '../../assets/tarjetas.png';
import efectivo from '../../assets/efectivo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.footer`
  background-color: antiquewhite;
	filter: drop-shadow(0 0 5px #0003);
  bottom: 0;
  width: 100%;
`;

const Transform = keyframes`
  from {
    transform: scale(1)
  }

  to {
    transform: scale(1.2)
  }
`

const StyledFooterLinks = styled.div`
  width: 100%;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
  font-size: 2rem;
`;

const StyledLinks = styled.a`
  flex: 1;
	padding: 20px 0px;
  &:hover {
    cursor: pointer;
    animation: ${Transform} 1s forwards;
  }
`;

const StyledFooterPayments = styled.div`
  display: grid;
	grid-template-columns: 500px 500px;
	text-align: center;
	justify-content: center;
	align-items: center;
	padding: 20px 0px;
  @media only screen and (max-width: 600px) {
    display: flex;
		text-align: center;
		justify-content: center;
		align-items: center;
		padding: 20px 0px;
  }
`;

const StyledFooterImages = styled.img`
  width: 200px;
	max-height: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
        <StyledFooterLinks>
          <StyledLinks>
            <FontAwesomeIcon icon={faFacebook} />
          </StyledLinks>
          <StyledLinks>
          <FontAwesomeIcon icon={faTwitter} />
          </StyledLinks>
          <StyledLinks>
          <FontAwesomeIcon icon={faInstagram} />
          </StyledLinks>
        </StyledFooterLinks>
        <hr/>
        <StyledFooterPayments>
         
          <p><b>ACEPTAMOS LOS SIGUIENTES MEDIOS DE PAGO:</b></p>
          <div>
            <StyledFooterImages src={tarjetas}/>
            <StyledFooterImages src={efectivo}/>
          </div>
        </StyledFooterPayments>
      </StyledFooter>
  )
}

export default Footer
