import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useForm from './../../hooks/useForm';
import styled from 'styled-components';
import * as cartActions from './../../redux/Cart/cart-actions';
import * as orderActions from './../../redux/Orders/order-actions';
import { VALIDATOR_REQUIRE } from '../../utils/validators';
import { Summary } from './../Purchases_Summary/Summary';
import { Input } from './../Login_Input/Input';

const COSTO_ENVIO = 50;

export const FormStyled = styled.form`
  width: 100%;
  max-width: 600px;
  z-index: 10;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 5%;
  box-shadow: 0 6px 20px 0 rgb(80, 80, 80);
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const FormSectionStyled = styled.div`
  padding: 30px;
  border-radius: 15px 15px;
  background-color: #fff;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  width: 100%;
  @media screen and (max-width: 600px) {
    padding: 30px;
  }
`;

export const FormTitle = styled.p`
  color: black;
  text-align: center;
`;

export const ShippingForm = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const { cartItems } = useSelector((state) => state.cart);
  const { purchased } = useSelector((state) => state.orders);
  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formState, inputHandler] = useForm(
    {
      domicilio: {
        value: '',
        isValid: false,
      },
      localidad: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!formState.isValid) {
      return;
    }
    const orderData = {
      userId: currentUser.id,
      shippingDetails: {
        domicilio: formState.inputs.domicilio.value,
        localidad: formState.inputs.localidad.value,
      },
      items: [...cartItems],
      shippingPrice: COSTO_ENVIO,
      subtotal: subTotal,
      total: COSTO_ENVIO + subTotal,
    };
    dispatch(orderActions.createOrder(orderData));
    dispatch(cartActions.clearCart());


  };

  if (purchased) {
    dispatch(orderActions.purchaseInit());
    navigate('/mis-compras');
  }

  return (
    <FormStyled onSubmit={handlerSubmit}>
      <FormSectionStyled>
        {!formState.isValid && (
          <FormTitle>
            Por favor, completá los datos para poder continuar
          </FormTitle>
        )}
        <Input
          id="domicilio"
          label="Domicilio"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Campo Obligatorio"
        />

        <Input
          id="localidad"
          label="Localidad"
          type="text"
          onInput={inputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Campo Obligatorio"
        />
      </FormSectionStyled>

      {formState.isValid && (
        <Summary
          isValid={!formState.isValid}
          subTotal={subTotal}
          envio={COSTO_ENVIO}>
        </Summary>
      )}

    </FormStyled>
  );
};