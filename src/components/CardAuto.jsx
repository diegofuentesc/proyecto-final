import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ContextoGlobal from '../contexts/ContextoGlobal';
import { useContext } from 'react';
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function CardAuto({ fav, auto }) {

  const setFavorito = (id) => {
    const autoClick = autos.findIndex((f) => f.id === id);
    autos[autoClick].liked = !autos[autoClick].liked;
    setAutos([...autos])
  }

  const navigate = useNavigate();

  const { usuario, eliminarAuto, autos, setAutos } = useContext(ContextoGlobal);
  const usuarioConectado = usuario.conectado !== 'null';

  const manejarBotonEliminar = () => {
    console.log('usuario.conectado:', usuario.conectado);
    if (`${usuario.nombre} ${usuario.apellido}` === auto.publicitado_por) {
      // Si el usuario conectado es el mismo que el usuario del auto, mostramos el botón de eliminar
      return (
        <> 
          <Button className='btnDetalle' onClick={() => verDetalle()}>Ver</Button>
          <Button className='btnEditar' variant="success" onClick={() => editarPublicacion()}>Editar</Button>
          <Button className='btnEliminar' variant="danger" onClick={() => eliminarAuto(auto.id)}>Eliminar</Button>
          
        </>
      );
    } else if (`${usuario.nombre} ${usuario.apellido}` !== auto.publicitado_por) {
      // Si el usuario conectado no es el mismo que el usuario del auto, mostramos corazon y detalle
      return (
        <>
          <Button className='btnDetalle' onClick={() => verDetalle()}>Detalle</Button>
          {usuarioConectado && !fav && (
  <FaHeart
    onClick={() => setFavorito(auto.id)}
    style={{
      color: auto.liked ? "red" : "gray",
      display: "flex",
      float: "left"
    }}
  />
)}
        </>
      );
    } else if (usuario.conectado === 'null') {
      return (
        <>
          <Button className='btnDetalle' onClick={() => verDetalle()}>Detalle</Button>
        </>
      );
    } else {
      // Si ninguna de las condiciones anteriores es verdadera mostramos
      return <Button className='btnDetalle' onClick={() => verDetalle()}>Detalle</Button>
    }
  }
 

  console.log(usuario.conectado);
  

  const verDetalle = () => {
    navigate(`/detalle/${auto.id}`)
  }

  const editarPublicacion = () => {
    navigate(`/editarPublicacion/${auto.id}`)
  }



  return (

    <div className='cardAutos'>
      <Card className='card d-flex align-items-center justify-content-center' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={auto.imagen} style={{height:'12rem'}} />
        <Card.Body>
          <Card.Title className='cardTitle' >{auto.titulo}</Card.Title>
          <Card.Text>
            <ul>
              <li>Año:{auto.ano}</li>
              <li>Kilometraje:{auto.kilometraje}</li>
              <li>Dueños:{auto.duenos}</li>
              <li>Transmision:{auto.transmision}</li>
              <li>Precio:${auto.precio}</li>
              <li>Combustible:{auto.combustible}</li>
              

            </ul>
            <ul>
              <p>🚗<strong>{auto.publicitado_por}</strong></p>
            </ul>

          </Card.Text>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {manejarBotonEliminar()}
            
          </div>
          
        </Card.Body>
      </Card>
      
    </div>
  );
}

export default CardAuto;