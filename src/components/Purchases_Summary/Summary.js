import styled, { keyframes } from "styled-components";
import { formatPrice } from './../../utils/formatPrice';
import { useSelector } from 'react-redux';

const Spin = keyframes`
  0% { transform: rotate(0deg); }

  100% { transform: rotate(360deg); }
`;

export const CardContainer = styled.div`
  max-width: 660px;
  width: 100%;
`;

export const CardSummaryStyled = styled.div`
  margin-top: 62px;
  background-color: #fff;
  border-radius: 15px;
  width: 100%;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
`;

const CardSummaryContent = styled.div`
  padding: 24px 32px 15px;
  border-radius: 15px 15px;
  background-color: white;
`;

export const UlCard = styled.ul`
  list-style: none;
  padding: 0;
`;

export const LiCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: #9faab7;
  margin-bottom: 15px;
`;

export const RowCard = styled.hr`
  height: 1px;
  width: 100%;
  background-color: #e5edef;
`;

export const TotalCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;


const StyledConfirmButton = styled.button`
  padding: 25px;
  border-radius: 50px;
  background-color: greenyellow;
  margin: 0 auto;
  text-align: center;
  border: none;
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

const StyledLoading = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid black; /* Blue */
  border-radius: 50%;
  margin-top: 5px;
  width: 100px;
  height: 100px;
  animation: ${Spin} 2s linear infinite;
`;

export const Summary = ({isValid, envio, subTotal}) => {

  const { purchased, loading } = useSelector((state) => state.orders);

  return (
  <CardContainer>
    <CardSummaryStyled>
      <CardSummaryContent>
        <UlCard>
          <LiCard>
            <p>Costo de productos</p>
            <span>{formatPrice(subTotal)}</span>
          </LiCard>
          <LiCard>
            <p>Costo de envío</p>
            <span>{formatPrice(envio)}</span>
          </LiCard>
        </UlCard>
        <RowCard />
        <TotalCard>
          <h4>Total</h4>
          <h4>{formatPrice(envio + subTotal)}</h4>
        </TotalCard>
        <div style={{textAlign: 'center'}}>
          <StyledConfirmButton>Confirmar</StyledConfirmButton>
          <StyledLoading hidden={!loading}/>
        </div>
      </CardSummaryContent>
    </CardSummaryStyled>
  </CardContainer>
  )
}