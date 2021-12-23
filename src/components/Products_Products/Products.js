import styled from 'styled-components';

export const StyledProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: 275px 600px;
  text-align: center;
  margin-bottom: 10px;
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: none;
    text-align: center;
    justify-content: center;
  }
`;

export const StyledProducts = styled.div`
  display: grid;
  grid-template-columns: 250px 250px 250px;
  column-gap: 30px;
  margin-left: 50px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`;

export const StyledCard = styled.div`
  filter: drop-shadow(15px 15px 15px #0003);
  margin-top: 20px;        
  margin-bottom: 15px;     
  height: fit-content;
  img {
    margin: 0 auto; 
    max-height: 200px;
    max-width: 250px;
    border: 2px solid #323232;
  }
  &:hover {
    transform: scale(0.95);
    cursor: pointer;
  }
`;
