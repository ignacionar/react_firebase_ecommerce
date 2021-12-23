import styled from "styled-components";

export const StyledOrdersWrapper = styled.div`
  margin: 0 2%;
  margin-bottom: 5%;
  box-shadow: 0 6px 20px 0 rgb(80, 80, 80);
  display: grid;
  height: 500px;
  grid-template-columns: 200px 200px 200px 200px 200px 200px;
  @media screen and (max-width: 600px) {
    overflow: auto;
    display: flex;
    justify-content: center;
    text-align: center;
    h2 {
      font-size: 8px;
    }
    div {
      padding: 5px;
      font-size: 8px;
      text-align: center;
    }
  }
`;
