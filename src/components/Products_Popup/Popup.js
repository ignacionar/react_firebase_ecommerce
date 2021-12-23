import styled from 'styled-components';

export const StyledProductsPopups = styled.div`
  display: grid;
  grid-template-columns: 600px 200px;
  margin-left: 130px;
  margin-top: 35px;
  margin-bottom: 35px;
  align-content: center;
  align-items: center;
  div {
    display: grid;
    grid-auto-rows: auto;
    grid-row-gap: 20px;
    align-content: space-around;
  }
  img {
    max-width: 350px;
  }
  button {
    border: 1px black solid;
    background-color: white;
    padding: 20px;
    cursor: pointer;
    border-radius: 20px;
    color: black;
    &:hover {
      background-color: black;
      border: 1px solid white;
      color: white;
    }
    &:active {
      transform: scale(0.95);
      border: 3px white solid;
      color: white;
    }
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: 400px 1fr;
    margin: 0 auto;
  }
`;
