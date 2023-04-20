import React from 'react'
import ContextoGlobal from '../contexts/ContextoGlobal';
import { useContext } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import CardAuto from '../components/CardAuto';

const MisPublicaciones = () => {

  const { autos, usuario } = useContext(ContextoGlobal);
  // Filtrar las publicaciones según el usuario conectado
  const publicacionesUsuario = autos.filter((auto) => {
    return auto.publicitado_por === `${usuario.nombre} ${usuario.apellido}`;
  });

return (
<Container className="galeria">
  <h3 className='tituloPublicaciones'>Estas son tus publicaciones</h3>
      <Row md={4}>
        {publicacionesUsuario.map((auto) => {
          return (
            <Col key={auto.id}>
              <CardAuto auto={auto} />
            </Col>
          );
        })}
      </Row>
    </Container>



    
  );
};

export default MisPublicaciones