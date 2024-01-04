import './social-home.css';
import Image from 'next/image';
import { Container } from "@mui/material";


export default function SocialMediaTitle () { 
  return (
    <main className=''>
      <Container className='title'> 
        <h1 className='title-h1'>SUMATE A LA COMUNIDAD CROSSI!</h1>
        <div className="social-media-container">
          <Image src="/ig.png" alt="Corazon" width={42} height={32} />
          <Image src="/fb.png" alt="Corazon" width={42} height={32} />
          <Image src="/tiktok.png" alt="Corazon" width={42} height={35} />
          <Image src="/linkedin.png" alt="Corazon" width={42} height={40} />
        </div>
      </Container>
      <Container className='social-description'>
        <p>A lo largo de estos años creamos una comunidad enorme y fiel a la que llamamos Crossifans. Para nosotros, <strong>LO MAS IMPORTANTE</strong>. Te invitamos a ser parte de ella. Compartinos tu experiencia en cualquiera de nuestras estaciones.</p>
      </Container>
    </main>


)
}  