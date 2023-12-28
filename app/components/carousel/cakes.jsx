"use client"
import Image from 'next/image';
import './cakes.css';
import { Container } from '@mui/material';
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
const sliderContainerStyle = {
  width: "100%",
  height: "100%",
};
const CakesPage = () => {
  const cakes = [
    {
      name: "bruce",
      title: "BRUCE",
      description: "Bizcochuelo húmedo de chocolate y crema bariloche. Cubierto en baño de chocolate.",
      small: "Chica: 2.800 a 3 kg, 12 cm de alto, 21 cm de diámetro.",
      big: "Grande: 4.500 kg,14 cm de alto, 27 cm de diámetro.",
      fontColor: "#A6643D",
    },
    {
      name: "red-velvet",
      title: "RED VELVET",
      description: "Bizcochuelo suave sabor cacao. Relleno y cubierto con cream cheese.",
      small: "Chica: 2.200 kg, 9 cm de alto, 19 cm de diámetro.",
      big: "Grande: 3.700 kg 15 cm de alto, 24 cm de diámetro.",
      fontColor: "#6C7246"
    },
    {
      name: "cheesecake-frutos-rojos",
      title: "CHEESECAKE FRUTOS ROJOS",
      description: "Base crocante de masa sablee. Relleno queso crema. Cubierto con mermelada casera de frutos rojos.",
      small: "Chica: 1.850 kg, 5cm de alto, 20 cm de diámetro.",
      big: "Grande: 2.150 kg 6 cm de alto, 26 cm de diámetro.",
      fontColor: "#FFFFFF",
    },
    {
      name: "cheesecake-oreo",
      title: "CHEESECAKE OREO",
      description: "Base crocante de oreo. Relleno de queso crema y oreos. Cubierta con crema y picos  de dulce de leche.",
      small: "Chica: 1.850 kg, 5cm de alto, 20 cm de diámetro.",
      big: "Grande: 2.150 kg 6 cm de alto, 26 cm de diámetro.",
      fontColor: "#6C7246"
    },
    {
      name: "triple-c",
      title: "TRIPLE C",
      description: "Doble mousse base crocante de chocolinas. Mousse de chocolate blanco y chocolate negro.",
      small: " ",
      big: "Grande: 3.700 kg, 8 cm de alto, 24 cm de diámetro.",
      fontColor: "#A6643D",
    },


  ];

  
  return (
    <main className="main">
      <Container className='cakes-component'>
        <div style={sliderContainerStyle}>
          <Slider {...sliderSettings}>
            {cakes.map((item) => (
              <div key={item.name} className={`cakes-container ${item.name}`}> 
                <div className="imageContainer">
                  <Image src={`/${item.name}.png`} alt={item.name} width={320} height={240}  />
                </div>
                <div className="detail-container">
                  <div className="cakes-info"> 
                    <h2><strong style={{ color: item.fontColor }}>{`${item.title}`}</strong></h2>
                    <p>{`${item.description}`}</p>
                    <p>{`${item.small}`}</p>
                    <p>{`${item.big}`}</p>
                  </div>
                </div>
                <div className="cake-logo">
                  <Image src='/logo-torta.png'  width={80} height={80}  /> 
                </div>
              </div>
            ))}
          </Slider> 
        </div> 
      </Container>
    </main>
  );
};

export default CakesPage;


