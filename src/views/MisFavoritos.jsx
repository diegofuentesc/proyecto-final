import React from 'react'
import Galeria from '../components/Galeria.jsx'
import { Container } from 'react-bootstrap';

const MisFavoritos = () => {
  return (
  <Container className="galeria">
  <h3 className='tituloPublicaciones'>Estos son tus favoritos</h3>
    <div className='galeriaFav'>
         <Galeria fav={true}></Galeria>
    </div>
    </Container>
  )
}

export default MisFavoritos