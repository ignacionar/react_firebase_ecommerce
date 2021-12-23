import React from 'react';
import styled from 'styled-components';
import RemoveIcon from '../../assets/delete-full.svg'
import * as cartActions from '../../redux/Cart/cart-actions'; 
import { useDispatch } from 'react-redux';

const QuantityManageStyled = styled.div`
  min-width: 100px;
  display: flex;
  justify-content: center;
  height: 24px;
  align-items: center;
  border-radius: 8px;
  margin: 5px;
  height: 32px;
  padding: 10px;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  outline: 1px solid gray;
`;

const QuantityStyled = styled.span`
  font-size: 14px;
  width: 24px;
  text-align: center;
`;

const QuantityButton = styled.div`
  width: 23px;
  color: black;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0px 10px;
  &:hover{
    background-color: antiquewhite;
  }
`;

const RemoveIconStyled = styled.img`
  width: 36px;
  height: auto;
  padding: 10px;
  cursor: pointer;
`

const QuantityManage = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <QuantityManageStyled>
      {+item.quantity === 1 ? (
        <RemoveIconStyled
          src={RemoveIcon}
          onClick={() => dispatch(cartActions.removeFromCart(item))}
        />
      ) : (
        <QuantityButton onClick={() => dispatch(cartActions.removeFromCart(item))}>
          -
        </QuantityButton>
      )}
      <QuantityStyled>{item.quantity}</QuantityStyled>

      <QuantityButton onClick={() => dispatch(cartActions.addToCart(item))}>
        +
      </QuantityButton>
    </QuantityManageStyled>
  );
};

export default QuantityManage;