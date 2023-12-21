import React from 'react';
import './footer.css';
import { Container } from '@mui/material';

export default function Footer() {
  return (
    <footer >
      <Container className="footer-container ">
        <div className="footer-section brand-logo">
          <img src="/logo-croissant-footer.png" alt="Logo Croissant" />
        </div>

        
        <div className="footer-section social-media">
          <p>seguinos</p>
          <img src="/ig.png" alt="Instagram" /> 
          {/* https://www.instagram.com/croissantmdp/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA== */}
          <img src="/fb.png" alt="Facebook" />
          {/* https://www.facebook.com/croissantcafemdp */}
          <img src="/tiktok.png" alt="TikTok" />
          {/* https://www.tiktok.com/@croissantmdp?is_from_webapp=1&sender_device=pc */}
        </div>

        
        <div className="footer-section contacts">
            <a href= "mailto:contacto@croissant.com.ar?&subject=Consulta&body=Hola%20Team%20Crossi,%0D%0A%0D%0A%0D%0A%0D%0A%0D%0A">contacto@crossi.com.ar</a>
        </div>

      </Container>
    </footer>
  );
}
