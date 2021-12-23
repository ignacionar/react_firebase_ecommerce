import styled from "styled-components";

export const StyledBuyButton = styled.button`
  padding: 25px;
  border-radius: 25px;
  border: none;
  background-color: greenyellow;
  font-weight: bolder;
  cursor: pointer;
  &:active {
    background-color: black;
    color: white;
  }
  &:disabled{
    cursor: no-drop;
    outline: 1px solid grey;
    background-color: white;
  }
`;

export const StyledBackButton = styled.button`
  padding: 25px;
  border-radius: 50px;
  text-align: center;
  border: none;
  background-color: #f74545;
  font-weight: bolder;
  cursor: pointer;
  &:active {
    background-color: black;
    color: white;
  }
  &:disabled{
    cursor: no-drop;
    background-color: white;
  }
`;