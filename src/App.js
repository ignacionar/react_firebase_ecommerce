import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { auth, createUserProfileDocument } from "./firebase/firebase-util";
import * as userActions from './redux/User/user-actions';
import Pantalones from './pages/Pantalones';
import Compras from './pages/Compras';
import Remeras from './pages/Remeras';
import Camperas from './pages/Camperas';
import Gorras from './pages/Gorras';
import Calzado from './pages/Calzado';
import Camisas from './pages/Camisas';
import MisCompras from './pages/MisCompras';

function onAuthStateChange(cb, action) {
  auth.onAuthStateChanged(async (userAuth) => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot((snapShot) => {
        cb(action({ id: snapShot.id, ...snapShot.data() }));
      });
    } else {
      cb(action(null));
    }
  });
}

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChange(dispatch, userActions.setCurrentUser);
    return () => {
      unsubcribe();
    };
  }, [dispatch]);


  return (
   <Router>
     <Routes>
      <Route exact path={'/'} element={<Home />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/pantalones'} element={<Pantalones/>} />
      <Route path={'/remeras'} element={<Remeras/>} />
      <Route path={'/camperas'} element={<Camperas/>} />
      <Route path={'/gorras'} element={<Gorras/>} />
      <Route path={'/calzado'} element={<Calzado/>} />
      <Route path={'/camisas'} element={<Camisas/>} />
      <Route path={'/compras'} element={<Compras/>} />
      <Route path={'/mis-compras'} element={<MisCompras/>} />

     </Routes>
   </Router>
      
  )
}

export default App;
