import styled from 'styled-components';

export const StyledFilters = styled.div`
  margin: 20px 0px;
  background-color: antiquewhite;
  filter: drop-shadow(0 0 10px #0003);
  border-radius: 10px;
  height: 410px;
  position: sticky;
  top: 0; /* required */
  align-items: center;
  margin-top: 40px; 
  @media only screen and (max-width: 600px) {
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 315px;
    position: static;
  }
`;

export const StyledCleanButton = styled.button`
  position: absolute;
  top: 0px;
  background-color: white;
  font-weight: bold;
  right: 0px;
  padding: 10px;
  border: #090909 2px solid;
  cursor: pointer;
  border-radius: 5px;
  &:active {
    transform: scale(0.95);
  }
`;

export const StyledFilterTitle = styled.h3`
  position: relative;
  margin-top: 40px;
  left: -1.6rem;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const StyledFilterTitle2 = styled.h3`
  position: relative;
  margin-top: 5px;
  left: -1.6rem;
`;

export const StyledULFilters = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  margin-top: 10px;
  top: 20px;
`;

export const StyledLIFilters = styled.li`
  margin-bottom: 5px;
  font-size: 14px;
  display: grid; 
  grid-template-columns: 20px 20px; 
  align-items: center;
`;

export const StyledSearch = styled.input`
  padding: 12px;
  border: 2px solid rgb(91, 84, 18);
  margin-bottom: 5px;
`;


