import React, { Component } from 'react';
import gorraNueva from '../../assets/gorra.jpg'
import camperaNueva from '../../assets/campera.jpg'
import remeraNueva from '../../assets/remeraRoja.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';

const StyledCenter = styled.div`
  width: 50%;
  margin-top: 3%;
  filter: drop-shadow(0 0 5px #0003);
  @media only screen and (max-width: 600px) {
    width: 70%;
  }
`;

const StyledH2 = styled.h2`
  text-align: center;
  margin-bottom: 2%;
`;

class DemoCarousel extends Component {
    render() {
        return (
        <StyledCenter>
          <StyledH2>PRODUCTOS NUEVOS</StyledH2>
          <center>
            <Carousel 
            autoPlay 
            width={"80%"} 
            showStatus={false} 
            infiniteLoop
            >
                <div>
                  <img src={remeraNueva} alt='1'/>
                  <p className="legend">REMERA ROJA</p>
                </div>
                <div>
                  <img src={camperaNueva} alt='2'/>
                  <p className="legend">CAMPERA AZUL</p>
                </div>
                <div>
                  <img src={gorraNueva} alt='3'/>
                  <p className="legend">GORRA NEGRA</p>
                </div>
               
            </Carousel>
          </center>
        </StyledCenter>
        );
    }
};

export default DemoCarousel