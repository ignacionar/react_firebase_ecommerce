import React, { useState } from 'react';
import styled from 'styled-components';
import useForm from '../hooks/useForm';
import { 
  VALIDATOR_EMAIL, 
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE } from '../utils/validators.js';
import GoogleLogo from '../assets/google_icon.svg';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatCowboySide } from '@fortawesome/free-solid-svg-icons';
import { Input } from '../components/Login_Input/Input';
import { auth, signInWithGoogle, createUserProfileDocument } from '../firebase/firebase-util';
import { error } from './../styles/Colors';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StyledForm = styled.form`
margin-top: 6%;
margin-bottom: 6%;
display: grid;
background-color: antiquewhite;
max-width: 400px;
filter: drop-shadow(0 0 10px #0009);
p {
  margin-left: 40px;
  margin-top: 0.5rem;
}
@media only screen and (max-width: 600px) {
  margin-top: 22%;
  margin-bottom: 30%;
  max-width: 430px;
}
`;

const StyledTitle = styled.section`
padding-top: 30px;
padding-bottom: 10px;
text-align: center;
display: flex;
align-items: center;
`;

const StyledContainerButtons = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
margin-bottom: 15px;
grid-gap: 20px;
`;

const StyledLoginButton = styled.button`
border: 1px rgb(159, 159, 159) solid;
background-color: white;
padding: 10px 30px;
border-radius: 10px;
cursor: pointer;
&:active {
  background-color: black;
  color: white;
}
`;

const CustomButton = styled.button`
font-family: 'Montserrat', cursive;
font-weight: 700;
z-index: 999;
border: none;
color: white;
height: 20px;
border-radius: 8px;
padding: 20px;
width: 30px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

const GoogleButton = styled(CustomButton)`
display: flex;
font-weight: 500;
justify-content: space-between;
background-color: black;
cursor: pointer;
padding: 20%;
width: 125px;
border: 1px white solid;
&:active {
  transform: translateY(-5%)
}
`;

const GoogleIcon = styled.img`
width: 15px;
height: 15px;
cursor: pointer;
`;

const SwitchMode = styled.section`
text-align: center;
margin-bottom: 5%;
&:hover { 
  text-decoration: underline;
  cursor: pointer;
}
`;

const StyledInvalidLogin = styled.h3`
  color: ${error};
  margin-bottom: 10px;
`;


const Login = () => {

  const navigate = useNavigate();
  const currentUser = useSelector(state => state.user.currentUser); 
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    }, false
  )

  if (currentUser) {
    navigate('/');
  }

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          email: {
            value: '',
            isValid: false,
          },
          password: {
            value: '',
            isValid: false,
          },
        },
        formState.inputs.email?.isValid && formState.inputs.password?.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          displayName: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (isLoginMode) {
      try {
        await auth.signInWithEmailAndPassword(
          formState.inputs.email.value,
          formState.inputs.password.value
        );
      } catch (error) {
        setInvalidLogin(true)
        setTimeout(() => {
          setInvalidLogin(false)
        }, 2000);
      }
    } else {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          formState.inputs.email.value,
          formState.inputs.password.value
        );

        await createUserProfileDocument(user, {
          displayName: formState.inputs.displayName.value,
        });
      } catch (error) {
        console.log(error)
        setInvalidLogin(true)
        setTimeout(() => {
          setInvalidLogin(false)
        }, 2000);
      }
    }

  };

  const handlerGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  }

  return (
  <>
    <Header />
      <StyledForm>
        <StyledTitle>
          <FontAwesomeIcon icon={faHatCowboySide} style={{fontSize: '25px', marginRight: '6px'}}/><h2>Fashion Ecommerce</h2>
        </StyledTitle>

        {
          !isLoginMode && (<Input 
            type='text' 
            id='displayName' 
            placeholder=' Ingrese Nombre'
            label='Nombre'
            onInput={inputHandler}
            errorText="Campo Obligatorio"
            validators={[VALIDATOR_REQUIRE()]}
            />)
        }

        <Input 
        type='email' 
        id='email' 
        placeholder=' Ingrese Email'
        label='Email'
        errorText="Campo Obligatorio"
        onInput={inputHandler}
        validators={[VALIDATOR_EMAIL(8)]}
        />

        <Input 
        type='password' 
        id='password' 
        placeholder=' Ingrese Contraseña'
        onInput={inputHandler}
        label='Contraseña'
        errorText="Campo Obligatorio"
        validators={[VALIDATOR_MINLENGTH(8)]}
        />

        {!invalidLogin ? 
        (<>
        <StyledContainerButtons>
          <StyledLoginButton onClick={handlerSubmit}>{isLoginMode ? "Ingresar" : "Registrarme"}</StyledLoginButton>
            <GoogleButton onClick={handlerGoogle}>
              {isLoginMode ? "Login con Google" : "Registrar con Google"}
                <GoogleIcon src={GoogleLogo}/>
            </GoogleButton>
          </StyledContainerButtons>
        <SwitchMode onClick={switchModeHandler}>
          {isLoginMode ? "No estás registrado? Clickeá acá" : "Ya estás registrado? Clickeá acá"}
        </SwitchMode>
        </>)
        : <StyledInvalidLogin>{isLoginMode ? "Email o contraseña inválidos!" : "Campos inválidos!"}</StyledInvalidLogin>
        }
      </StyledForm> 
    <Footer />
  </>
  )
};

export default Login