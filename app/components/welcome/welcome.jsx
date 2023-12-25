import './welcome.css';
import { Container } from "@mui/material";


export default function WelcomeComponent () { 
  return (
    <main className='welcome-container'>
      <Container className='container'> 
        <h1>HOLAAA!</h1>
        <p>Nos presentamos como Crossi por que así nos llaman nuestros amigos. Somos el cafecito con más buena onda de Mar del Plata.</p>
      </Container>
    </main>
)
} 