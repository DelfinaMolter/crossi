import React from 'react';
import './footer.css';
import { Container } from '@mui/material';
import Link from 'next/link';
import Image from "next/image";
import Logo from "public/logo-croissant.png";
import Insta from "public/ig.png";
import Face from "public/fb.png";
import TikTok from "public/tiktok.png";

// TODO:
// - imagen de tiktok tiene diferente tamaño que las otras.
// - hacer responsivo

export default function Footer() {
  return (
    <footer >
      <Container className="footer-container ">
        <div className="footer-section ">
          <Image 
            src={Logo}
            width={150}
            height={20}
            alt="Logo Croissant"
            className='brand-logo'
            priority />
        </div>

        
        <div className="footer-section social-media">
          <p>seguinos</p>
          <Link href={"https://www.instagram.com/croissantmdp/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="}  rel="noopener noreferrer" target="_blank">
            <Image 
              src={Insta}
              width={150}
              height={20}
              alt="Instagram"
              className='social'
              priority />
          </Link>
          <Link href={"https://www.facebook.com/croissantcafemdp"} rel="noopener noreferrer" target="_blank">
            <Image 
              src={Face}
              width={150}
              height={20}
              alt="Facebook"
              className='social'
              priority />
          </Link>
          <Link href={"https://www.tiktok.com/@croissantmdp?is_from_webapp=1&sender_device=pc"} rel="noopener noreferrer" target="_blank">
            <Image 
              src={TikTok}
              width={150}
              height={20}
              alt="TikTok"
              className='social'
              priority />
          </Link>
        </div>

        
        <div className="footer-section contacts">
            <a href= "mailto:contacto@croissant.com.ar?&subject=Consulta&body=Hola%20Team%20Crossi,%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A">contacto@crossi.com.ar</a>
        </div>

      </Container>
    </footer>
  );
}
