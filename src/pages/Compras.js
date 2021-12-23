import React, { useState } from 'react'
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import { useSelector } from 'react-redux';
import { PurchasesWrapper } from './../components/Purchases_Wrapper/PurchasesWrapper';
import QuantityManage from '../components/Purchases_QuantityManage/QuantityManage';
import styled from 'styled-components';
import { ShippingForm } from '../components/Purchases_ShippingForm/ShippingForm';
import { StyledBuyButton, StyledBackButton } from '../components/Purchases_Buttons/PurchasesButtons';

const ItemImg = styled.div`
  width: 46px;
  height: 46px;
  background-image: ${({img}) => `url(${img})`};
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
`;

const StyledDiv = styled.div`
  width: 132px;
  text-align: center;
  margin: 15px 10px;
  outline: 3px solid grey;
  @media only screen and (max-width: 600px) {
    width: 120px;
  }
`;


const Compras = () => {

  const cartItems = useSelector(state => state.cart.cartItems);

  const [buyProcess, setBuyProcess] = useState(false)

  return (
    <>
      <Header/>
      {
        !buyProcess ?

        <PurchasesWrapper style={cartItems.length === 0 ? {display: 'block'} : {display: 'grid'}}>
        <div style={{textAlign: 'center', margin: '10px 0'}}>
          <h2 style={{margin: '5px'}}>{cartItems[0] ? 'Tu carrito:' : 'Nada en tu carrito...'}</h2>
          <StyledBuyButton disabled={cartItems.length === 0} onClick={() => setBuyProcess(true)}>COMPRAR</StyledBuyButton>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          cartItems.map((item) => (
            <StyledDiv>
              <QuantityManage item={item}></QuantityManage>
              <ItemImg img={item.img} alt={item.img}></ItemImg>
              <h4>{item.name}</h4>
            </StyledDiv>
          ))
        }
        </div>
      </PurchasesWrapper>
      : 
      <>
      <ShippingForm />
      <div style={{textAlign: 'center', marginBottom: "5%", display: 'flex', justifyContent: 'space-between', width: "40%"}}>
        <StyledBackButton onClick={() => setBuyProcess(false)}>Cancelar</StyledBackButton>
      </div>
      </>
     

        

      
      }
      

      <Footer/>
    </>
  )
}



export default Compras
