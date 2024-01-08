import './info.css';
import { Container } from "@mui/material";
import Image from 'next/image';


export default function Info () { 
  return (
    <main>
      <Container className='container' id='info'> 
        <p>En crossi no solo regalamos calidad y mucho amor en nuestros productos,</p>
        <h1 className='experiencia'>llevamos todo lo que hacemos a otro nivel para que tu experiencia se convierta en un viaje de ida</h1>
      </Container>
      <div className="attributes">
        <div className="attribute-1">
          <Image src="/corazon.png" alt="Corazon" width={215} height={245} style={{ maxWidth: '100%', height: 'auto' }}/>
          <h1 className='info-h1'>SOMOS RICOS Y ABUNDANTES</h1>
        </div>
        <div className="attribute-2">
          <Image src="/camera.png" alt="Camara" width={239} height={231} style={{ maxWidth: '100%', height: 'auto' }}/>
          <h1 className='info-h1'>Y MUY INSTAGRAMEABLES</h1>
        </div>
      </div>
    </main>
)
} 