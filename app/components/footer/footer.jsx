import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="footer-container">
      
      <div className="footer-section brand-logo">
        <img src="/logo-croissant-footer.png" alt="Logo Croissant" />
      </div>

      
      <div className="footer-section social-media">
        <p>seguinos</p>
        <img src="/ig.png" alt="Instagram" />
        <img src="/fb.png" alt="Facebook" />
        <img src="/tiktok.png" alt="TikTok" />
      </div>

      
      <div className="footer-section contacts">
        <p>contacto@crossi.com.ar</p>
      </div>
    </footer>
  );
}
