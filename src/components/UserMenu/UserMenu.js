import styled from 'styled-components';
import * as userActions from '../../redux/User/user-actions';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase/firebase-util';
import { element } from '../../styles/Colors';
import { Link } from 'react-router-dom';

const UserMenuStyled = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 0;
  opacity: 1;
  border: 1px solid #c7c7c7;
  visibility: visible;
  border-radius: 8px;
  background: #ffffff;
  @media only screen and (max-width: 600px) {
  position: relative; 
}
`;

const WelcomeTitle = styled.div`
  border-bottom: 1px solid #e5edef;
  width: 100%;
  padding-bottom: 5px;
  padding: 15px 20px;
`;

const MenuOptions = styled.div`
  width: 100%;
`;

const MenuOptionElement = styled.div`
  transition: all 0.3s linear;
  padding: 15px 20px;
  color: #7d7d7d;
  font-size: 14px;
  font-family: 'Montserrat', cursive;
  cursor: pointer;
  &:hover {
    background-color: #BBDBF4;
    color: ${element};
  }
`;

const Shadow = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
`;

export const UserMenu = ({ user }) => {

  const { hiddenMenu } = useSelector(state => state.user);
  
  const dispatch = useDispatch()

  const handlerToggle = () => {
    dispatch(userActions.toggleMenuHidden())
  }

  return (
    <>
      {!hiddenMenu && <Shadow onClick={handlerToggle} />}
      {!hiddenMenu ? (
        <UserMenuStyled>
          <WelcomeTitle>Hola {user.displayName}</WelcomeTitle>
          <MenuOptions>
            <Link to='/mis-compras' onClick={handlerToggle}><MenuOptionElement>Mis Compras</MenuOptionElement></Link>
            
            <Link to='/'>
              <MenuOptionElement onClick={() => auth.signOut()}>
                Cerrar Sesión
              </MenuOptionElement>
            </Link>
            
          </MenuOptions>
        </UserMenuStyled>
      ) : null}
    </>
  );
};