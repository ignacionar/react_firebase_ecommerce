import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledSection = styled.div`
  max-width: 1200px;
	width: 100%;
	margin-top: 6%;
	margin-bottom: 8%;
	display: grid;
	grid-template-areas: 
	"section_pantalones section_remeras section_calzado"
	"section_camperas section_gorras section_camisas";
	text-align: center;
	grid-row-gap: 20px;
	grid-column-gap: 20px;
  @media only screen and (max-width: 600px) {
    grid-template-areas: 
	  "section_pantalones" 
    "section_remeras" 
    "section_calzado"
	  "section_camperas" 
    "section_gorras" 
    "section_camisas";
  }
`;

const StyledSectionItems = styled.div`
  width: 100%;
	height: 200px;
	border: 1px solid rgb(139, 139, 139);
	display: flex;
	flex-direction: column;
	background-color: antiquewhite;
	filter: drop-shadow(0 0 5px #0003);
	justify-content: center;
	align-items: center;
`;



const SectionPantalones = styled(StyledSectionItems)`
  grid-area: "section_pantalones";
  transform: translateY(0);
  transition: all .3s ease-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-30%)
  }
  @media only screen and (max-width: 600px) {
    &:hover {
    cursor: pointer;
    transform: translateY(-5%)
    }
  }
`;

const SectionRemeras = styled(StyledSectionItems)`
  grid-area: "section_remeras";
  transform: translateY(0);
  transition: all .3s ease-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-30%)
  }
  @media only screen and (max-width: 600px) {
    &:hover {
    cursor: pointer;
    transform: translateY(-5%)
    }
  }
`;

const SectionCalzado = styled(StyledSectionItems)`
  grid-area: "section_calzado";
  transform: translateY(0);
  transition: all .3s ease-out;
  &:hover {
    cursor: pointer;
    transform: translateY(30%)
  }
  @media only screen and (max-width: 600px) {
    &:hover {
    cursor: pointer;
    transform: translateY(-5%)
    }
  }
`;

const SectionCamperas = styled(StyledSectionItems)`
  grid-area: "section_camperas";
  transform: translateY(0);
  transition: all .3s ease-out;
  &:hover {
    cursor: pointer;
    transform: translateY(-30%)
  }
  @media only screen and (max-width: 600px) {
    &:hover {
    cursor: pointer;
    transform: translateY(-5%)
    }
  }
`;

const SectionGorras = styled(StyledSectionItems)`
  grid-area: "section_gorras";
  transform: translateY(0);
  transition: all .3s ease-out;
  &:hover {
    cursor: pointer;
    transform: translateY(30%)
  }
  @media only screen and (max-width: 600px) {
    &:hover {
    cursor: pointer;
    transform: translateY(-5%)
    }
  }
`;

const SectionCamisas = styled(StyledSectionItems)`
  grid-area: "section_camisas";
  transform: translateY(0);
  transition: all .3s ease-out;
  &:hover {
    cursor: pointer;
    transform: translateY(30%)
  }
  @media only screen and (max-width: 600px) {
    &:hover {
    cursor: pointer;
    transform: translateY(-5%)
    }
  }
`;

const StyledEmoji = styled.p`
  font-size: 4rem;
`;

const Sections = () => {
  return (
    <StyledSection>
      <Link to={'/pantalones'} style={{width: "100%"}}>
        <SectionPantalones>
          <h2>PANTALONES</h2>
          <StyledEmoji>👖</StyledEmoji>
        </SectionPantalones>
      </Link>
      <Link to={'/remeras'} style={{width: "100%"}}>
        <SectionRemeras>
          <h2>REMERAS</h2>
          <StyledEmoji>👕</StyledEmoji>
        </SectionRemeras>
      </Link>
      <Link to={'/camperas'} style={{width: "100%"}}>
        <SectionCamperas>
          <h2>CAMPERAS</h2>
          <StyledEmoji>🧥</StyledEmoji>
        </SectionCamperas>
      </Link>
      <Link to={'/gorras'} style={{width: "100%"}}>
        <SectionGorras>
          <h2>GORRAS</h2>
          <StyledEmoji>🧢</StyledEmoji>
        </SectionGorras>
      </Link>
      <Link to={'/calzado'} style={{width: "100%"}}>
        <SectionCalzado>
          <h2>CALZADO</h2>
          <StyledEmoji>👞</StyledEmoji>
        </SectionCalzado>
      </Link>
      <Link to={'/camisas'} style={{width: "100%"}}>
        <SectionCamisas>
          <h2>CAMISAS</h2>
          <StyledEmoji>👔</StyledEmoji>
        </SectionCamisas>
      </Link>
    </StyledSection>
  )
}

export default Sections;
