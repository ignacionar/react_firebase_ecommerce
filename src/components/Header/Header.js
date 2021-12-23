import React from 'react'
import styled from 'styled-components';
import Navbar from '../Navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboySide } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: grid;
	grid-template-columns: 400px 1fr;
	margin: 0 auto;
	padding: 5px;
	animation-duration: 2s; 
	animation-iteration-count: 1;
	animation-delay: 0s; 
	text-align: center;
	background-color: antiquewhite;
	filter: drop-shadow(0 0 5px #0003);
  align-items: center;
  @media only screen and (max-width: 600px) {
    display: flex;
		flex-direction: column; 
  }
`;

const StyledTitle = styled.div`
  display: flex;
	align-items: center;
	padding: 20px 15px;
`

const Header = () => {
  return (
    <StyledHeader>
      <Link to={'/'}>
        <StyledTitle>
          <FontAwesomeIcon icon={faHatCowboySide} style={{fontSize: '25px', marginRight: '6px'}}/>
          <h2>Fashion Ecommerce</h2>
        </StyledTitle>
      </Link>
      <Navbar/>
    </StyledHeader>
  )
}

export default Header
