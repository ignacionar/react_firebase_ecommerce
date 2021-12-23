import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { UserMenu } from '../../components/UserMenu/UserMenu';
import * as userActions from '../../redux/User/user-actions';


const StyledNumber = styled.span`
position: relative;
font-weight: bolder;
`;

const StyledToggle = styled.a`
color: black;
display: none; 
text-align: center;
padding: 10%;
animation-duration: 2s; 
animation-iteration-count: 1;
animation-fill-mode: zoom-in; 
animation-delay: 0s; 
&:hover {
  background: rgba(0, 0, 0, 0.2);
}
@media only screen and (max-width: 600px) {
  display: block;
  flex-basis: 100%; 
  padding: 20px;
}
`;

const StyledUL = styled.ul`
display: flex; 
list-style: none;
margin: 0;
max-width: 100%;
padding: 0;
justify-content: space-between;
align-items: center;
@media only screen and (max-width: 600px) {
  display: none;
  flex-wrap: wrap; 
}
`;

const StyledLI = styled.li`
display: flex;
align-items: center;
padding: 20px 21px;
&:hover {
background: rgba(0, 0, 0, 0.2);
}
@media only screen and (max-width: 600px) {
  flex-basis: 100%; 
}
`;

const StyledCartLI = styled.li`
display: flex;
align-items: center;
padding: 20px 14px;
flex-basis: 20%; 
&:hover {
  background: rgba(0, 0, 0, 0.2);
}
`;

const StyledNavbar = styled.nav`
font-size: 13px;
`;

export const Navbar = () => {

  const currentUser = useSelector(state => state.user.currentUser); 
  const quantity = useSelector(state => 
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity
    }, 0)
  );
  const [toggleState, setToggleOpen] = useState(false);
  const dispatch = useDispatch()

  const toggleHandler = (e) => {
    e.preventDefault()
    setToggleOpen(true)

    if (toggleState === true) {
      setToggleOpen(false)
    }
  }

  const handlerToggle = () => {
    dispatch(userActions.toggleMenuHidden())
  }

  return (

          <StyledNavbar>
              <StyledToggle href="" onClick={toggleHandler}>☰ Menu</StyledToggle>  
              <StyledUL id={`${toggleState ? "open" : ""}`}>
                  <Link to={'/pantalones'}><StyledLI>Pantalones</StyledLI></Link>
                  <Link to={'/remeras'}><StyledLI>Remeras</StyledLI></Link>
                  <Link to={'/camperas'}><StyledLI>Camperas</StyledLI></Link>
                  <Link to={'/gorras'}><StyledLI>Gorras</StyledLI></Link>
                  <Link to={'/calzado'}><StyledLI>Calzado</StyledLI></Link>
                  <Link to={'/camisas'}><StyledLI>Camisas</StyledLI></Link>
                  { !currentUser 
                    ? (<Link to={'/login'}><StyledLI>Iniciar Sesión</StyledLI></Link>)
                    : 
                    (<>
                      <StyledLI onClick={handlerToggle} style={{cursor: 'pointer'}}><FontAwesomeIcon icon={faUser} style={{fontSize: '25px'}}></FontAwesomeIcon></StyledLI>
                      <UserMenu user={currentUser}></UserMenu>
                    </>)
                  }
                  <Link to={currentUser ? '/compras' : '/login'}>
                    <StyledCartLI>
                        <FontAwesomeIcon icon={faShoppingCart} style={{fontSize: '25px'}}/>
                        <StyledNumber>{quantity > 0 ? `#${quantity}` : ''}</StyledNumber>
                    </StyledCartLI>
                  </Link>
              </StyledUL>
          </StyledNavbar>
  )
}

export default Navbar
