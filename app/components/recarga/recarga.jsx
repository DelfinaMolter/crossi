import './recarga.css';
import Image from 'next/image';
import { Container } from "@mui/material";


export default function Recarga () { 
  return (
    <main className=''>
      <Container className='recarga'> 
        <Image src="/vasos.png" alt="Vasos" width={450} height={330} sx={{ maxWidth: 600, height: 'auto' }} />
        <div className="recarga-text">
          <h1>RECARGATE</h1>
          <p className='description'>Con nuestros vasos facheritos y disfrutá de un buen café.</p>
          <p className='boton'>Conseguilos en<br /> nuestras sucursales</p>
        </div>
      </Container>
    </main>


)
} 