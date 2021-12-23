import React from 'react';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { formatDate } from './../utils/formatDate';
import { StyledOrdersWrapper } from '../components/Orders_Wrapper/OrdersWrapper';
import { StyledColumn, StyledElement, StyledID, StyledStatus } from '../components/Orders_Elements/OrdersElements';

const StyledTitle = styled.h2`
  text-align: center;
  text-decoration: underline;
  margin: 3% 0;
`;

const StyledNothing = styled.div`
  height: auto;
  box-shadow: 0 6px 20px 0 rgb(80, 80, 80);
  width: 250px;
  margin: 12% auto;
  text-align: center;
`;

const MisCompras = () => {

  const orders = useSelector(state => state.orders.orders); 

  return (
    <>
      <Header/>
      <StyledTitle>MIS COMPRAS</StyledTitle>
      {orders[0] === undefined ? 
        <StyledNothing><h2>Ninguna compra realizada...</h2></StyledNothing>
      : 
      
      <StyledOrdersWrapper>
        <StyledColumn>
          <h2>ID DE ORDEN:</h2>
          {
            Object.entries(orders).map(([indexNumber, order]) => {
              return (
                <StyledID>{order.id}</StyledID>
              )
            })
          }
        </StyledColumn>
        <StyledColumn>
          <h2>COSTO:</h2>
          {
            Object.entries(orders).map(([indexNumber, order]) => {
              return (
                <StyledElement>{"$" + order.total}</StyledElement>
              )
            })
          }
      
        </StyledColumn>
        <StyledColumn>
          <h2>FECHA:</h2>
          {
            Object.entries(orders).map(([indexNumber, order]) => {
              return (
                <StyledElement>{formatDate(order.createdAt.seconds)}</StyledElement>
              )
            })
          }
      
        </StyledColumn>
        <StyledColumn>
          <h2>LOCALIDAD:</h2>
          {
            Object.entries(orders).map(([indexNumber, order]) => {
              return (
                <StyledElement>
                  {order.shippingDetails.localidad}
                </StyledElement>
              )
            })
          }
      
        </StyledColumn>
        <StyledColumn>
          <h2>DOMICILIO:</h2>
          {
            Object.entries(orders).map(([indexNumber, order]) => {
              return (
                <StyledElement>
                  {order.shippingDetails.domicilio}
                </StyledElement>
              )
            })
          }
      
        </StyledColumn>
        <StyledColumn>
          <h2>ESTADO:</h2>
          {
            Object.entries(orders).map(([indexNumber, order]) => {
              return (
                <StyledStatus style={order.status === 'pendiente' ? {backgroundColor: '#FFDB58'} : {backgroundColor: 'limegreen'}}>
                  {order.status}
                </StyledStatus>
              )
            })
          }
      
        </StyledColumn>
        
      </StyledOrdersWrapper>
      }
      <Footer/>
    </>
  )
}

export default MisCompras
