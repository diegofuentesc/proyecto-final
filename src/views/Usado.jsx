import React from 'react'
import { Col, Form, ListGroup, Row, Button } from 'react-bootstrap';
import ContextoGlobal from '../contexts/ContextoGlobal';
import { useContext, useState } from 'react';
import CardAuto from '../components/CardAuto';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const Usado = () => {
  const { seacher, search, autos, setAutos, setCombustibleFilter, setTipoCaja } = useContext(ContextoGlobal);
  const [orden, setOrden] = useState('ascendente');

  const sortData = () => {
    const sortedData = [...autos].sort((a, b) => {
      if (orden === 'ascendente') {
        return a.precio - b.precio;
      } else {
        return b.precio - a.precio;
      }
    });
    setAutos(sortedData);
    setOrden(orden === 'ascendente' ? 'descendente' : 'ascendente');
  }

  const limpiarFiltros = () => {
    setCombustibleFilter();
    setTipoCaja();
    setOrden('ascendente');
    setAutos(autos);
  }
  
  
  
  
  const publicacionesUsuario = autos.filter((auto) => {
    return auto.estado === 'usado';
  });


  return (

    <Row className='publicados'>
    <Col md={3} className='filtros'>
      <ListGroup>
        <ListGroup.Item>
          <Form.Control value={search} onChange={seacher} type="text" placeholder="Buscar por modelo" />
        </ListGroup.Item>
        <ListGroup.Item>
          <Button onClick={sortData} className='btnFiltros'>
            {orden === 'ascendente' ? 'Precio' : 'Precio'}
            {orden === 'ascendente' ? <FiChevronUp /> : <FiChevronDown />}
          </Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button onClick={() => setTipoCaja('Automatico')} className='btnFiltros'>Automatico</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button onClick={() => setTipoCaja('Manual')} className='btnFiltros'>Manual</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button onClick={() => setCombustibleFilter('Bencina')} className='btnFiltros'>Bencina</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button onClick={() => setCombustibleFilter('Diesel')} className='btnFiltros'>Diésel</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <Button onClick={limpiarFiltros}>Limpiar filtros</Button>
        </ListGroup.Item>
      </ListGroup>
    </Col>
    <Col md={9} className='publicadosNuevos'>
      <Row>
        <h3 className='tituloNuevos'>Autos Usados</h3>
    {publicacionesUsuario.map((auto) => {
          return (
            
            <Col key={auto.id}>
              <CardAuto auto={auto} />
            </Col>
           
          );
        })}
        </Row>
    </Col>
    
  </Row>
  )
}
export default Usado