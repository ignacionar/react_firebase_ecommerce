import styled from "styled-components";

export const PurchasesWrapper = styled.div`
  margin: 125px 30px;
  box-shadow: 0 6px 20px 0 rgb(80, 80, 80);
  display: grid;
  grid-template-columns: 250px 1fr;
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: none;
  }
`;