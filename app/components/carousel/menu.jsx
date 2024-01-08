"use client";
import Image from 'next/image';
import './cakes.css';
import { Container } from '@mui/material';
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';

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

const MenuPage = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const menues = [
    {
      name: "lunes",
      mobileImage: "lunes-mobile.png",
    },
    {
      name: "martes",
      mobileImage: "martes-mobile.png",
    },
    {
      name: "miercoles",
      mobileImage: "miercoles-mobile.png",
    },
    {
      name: "jueves",
      mobileImage: "jueves-mobile.png",
    },
    {
      name: "viernes",
      mobileImage: "viernes-mobile.png",
    },
  ];

  return (
    <main className="main-menu">
      <Container className="menues-component">
        <div style={sliderContainerStyle}>
          <Slider {...sliderSettings}>
            {menues.map((item) => (
              <div key={item.name} className={`menues-container ${item.name}`}>
                <div className="menu-img">
                  <Image
                    src={isMobile ? `/${item.mobileImage}` : `/${item.name}.png`}
                    alt={item.name}
                    width={isMobile ? 768 : 1442}
                    height={isMobile ? 392 : 768}
                    layout="responsive"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </main>
  );
};

export default MenuPage;
