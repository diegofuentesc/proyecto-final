import { Col, Form, ListGroup, Row, Button } from 'react-bootstrap';
import Galeria from '../components/Galeria';
import ContextoGlobal from '../contexts/ContextoGlobal';
import { useContext, useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

const Publicaciones = () => {

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
      <Col md={9} className='publicadoGaleria'>
        <h3>Autos publicados</h3>
        <Galeria />
      </Col>
    </Row>
  )
}

export default Publicaciones;