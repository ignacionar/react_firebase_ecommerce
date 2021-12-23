import React from 'react';
import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';
import Navbar from './../components/Navbar/Navbar';
import { StyledProductsWrapper, StyledProducts, StyledCard } from '../components/Products_Products/Products';
import { StyledFilters, StyledSearch, StyledULFilters, StyledLIFilters, StyledCleanButton, StyledFilterTitle, StyledFilterTitle2} from '../components/Products_Filters/Filter';
import { productItem } from './../data/data';
import { useState } from 'react';
import { clickedProduct } from '../redux/Popup/popup-actions';
import { useDispatch, useSelector } from 'react-redux';
import { StyledProductsPopups } from './../components/Products_Popup/Popup';
import { addToCart } from '../redux/Cart/cart-actions';

const Camperas = () => {

  const [popUpState, setPopUpState] = useState(false);
  const [hideFilters, sethideFilters] = useState(false);
  const dispatch = useDispatch();
  const displayProduct = useSelector(state => state.popUp.product[0])

  const passObject = (obj) => {
    setPopUpState(true);
    dispatch(clickedProduct(obj));
  }

  const [search, setSearch] = useState('');
  const [filterColor, setFilterColor] = useState('');
  const [filterType, setFilterType] = useState('');

  return (
    <>
      <Header>
        <Navbar>

        </Navbar>
      </Header>
      <StyledProductsWrapper>
        <StyledFilters style={hideFilters ? {display: 'none'} : {display: 'grid'}}>
          <StyledCleanButton onClick={() => window.location.reload()}>Limpiar Filtros</StyledCleanButton>
          
          <div style={{marginBottom: "10px"}}>
            <StyledFilterTitle>Colores</StyledFilterTitle>
            <StyledULFilters>
              <StyledLIFilters><input type={'radio'} name='color' value='Azul' onClick={(e) => setFilterColor(e.target.value)}/> Azul</StyledLIFilters>
              <StyledLIFilters><input type={'radio'} name='color' value='Negro' onClick={(e) => setFilterColor(e.target.value)}/> Negro</StyledLIFilters>
              <StyledLIFilters><input type={'radio'} name='color' value='Verde' onClick={(e) => setFilterColor(e.target.value)}/> Verde</StyledLIFilters>
              <StyledLIFilters><input type={'radio'} name='color' value='Rojo' onClick={(e) => setFilterColor(e.target.value)}/> Rojo</StyledLIFilters>
              <StyledLIFilters><input type={'radio'} name='color' value='Amarillo' onClick={(e) => setFilterColor(e.target.value)}/> Amarillo</StyledLIFilters>
              <StyledLIFilters><input type={'radio'} name='color' value='Blanco' onClick={(e) => setFilterColor(e.target.value)}/> Blanco</StyledLIFilters>
            </StyledULFilters>
            <StyledFilterTitle2>Tipos</StyledFilterTitle2>
            <StyledULFilters>
              <StyledLIFilters><input type={'radio'} name='tipos' value='Anorak' onClick={(e) => setFilterType(e.target.value)}/> Anorak</StyledLIFilters>
              <StyledLIFilters><input type={'radio'} name='tipos' value='Hoodie' onClick={(e) => setFilterType(e.target.value)}/> Hoodie</StyledLIFilters>
              <StyledLIFilters><input type={'radio'} name='tipos' value='Cuero' onClick={(e) => setFilterType(e.target.value)}/> Cuero</StyledLIFilters>
              <StyledLIFilters><input type={'radio'} name='tipos' value='Sweater' onClick={(e) => setFilterType(e.target.value)}/> Sweater</StyledLIFilters>
              <StyledLIFilters><input type={'radio'} name='tipos' value='Buzo' onClick={(e) => setFilterType(e.target.value)}/> Buzo</StyledLIFilters>
            </StyledULFilters>
          </div>
      
          <StyledSearch placeholder='Buscá tu producto...' onChange={(e) => setSearch(e.target.value.toUpperCase())}/>
  
          
        </StyledFilters>

        <StyledProducts>

          {!popUpState ? 
          Object.entries(productItem).map(([indexNumber, product]) => {
            if (product.section === 'Camperas' && product.name.includes(search) && product.color.includes(filterColor) && product.type.includes(filterType)) {
              return (
                <StyledCard name={product.name} 
                onClick={() => {
                passObject(product)
                sethideFilters(true)}}>
                  <img src={product.img} alt={product.name}></img>
                  <h3>{product.name}</h3>
                </StyledCard>
              )
            } 
           
          }) 
          : <StyledProductsPopups>
              <img src={displayProduct.img} alt={displayProduct.img}/>
              <div>
                <h2>Artículo: {displayProduct.name}</h2>
                <h2>Precio:  {'$' + displayProduct.price}</h2>
                <h2>Tipo: {displayProduct.type}</h2>
                <h2>Color: {displayProduct.color}</h2>
                <button onClick={() => dispatch(addToCart(displayProduct))}>COMPRAR</button>
                <button onClick={() => {
                  sethideFilters(false)
                  setPopUpState(false)}}>VOLVER</button>
              </div>
            </StyledProductsPopups>
            }
          
        </StyledProducts>


      </StyledProductsWrapper>


      <Footer />
    </>
  )
}

export default Camperas;
