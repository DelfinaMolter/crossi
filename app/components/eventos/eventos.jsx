import Image from 'next/image';
import './eventos.css';
import { Container } from '@mui/material';

const Eventos = () => {
  const listaEventos = [
    {
      name: "cumple",
      title: "CUMPLES CROSSI",
      description: "Disfrutá, decorá, divertite en tu cumple y compartí lo más rico de Crossi.",
    },
    {
      name: "eventos",
      title: "EVENTOS",
      description: "Contanos de que se trata tu evento, nosotros nos encargamos de acesorarte y brindarte el mejor servicio de catering.",
    },
    {
      name: "regala",
      title: "REGALÁ CROSSI",
      description: "Regalá o hacete un mimo a vos mismo, con nuestro merch!",
    }

  ];

  
  return (
    <main>
      <Container className='events-component'>
            {listaEventos.map((item) => (
              <div key={item.name} className={`events-container ${item.name}`}> 
                <div className="events-img">
                  <Image className="imagen"src={`/${item.name}.png`} alt={item.name} width={200} height={200}  />
                </div>
                <div className="detail-container events-text">
                  <div className="events-info"> 
                    <h2 className='events-title'><strong>{`${item.title}`}</strong></h2>
                    <p>{`${item.description}`}</p>
                  </div>
                </div>
              </div>
            ))} 
      </Container>
    </main>
  );
};

export default Eventos;


