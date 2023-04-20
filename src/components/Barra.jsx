import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, Form, NavDropdown } from 'react-bootstrap';
import logo from '../img/logo.png';
import { useContext } from 'react';
import ContextoGlobal from '../contexts/ContextoGlobal';




function Barra() {

  const { setUsuario, usuario, avatar } = useContext(ContextoGlobal);

  const cerrarSesion = () => {
    setUsuario({ conectado: false, nombre: '' });
    //setConectado(false);
  }

  console.log(avatar)

  return (
    <Navbar className='barra' expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="/"><img src={logo} alt="logo" style={{ height: '70px' }} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='menu' to='/'>Inicio</NavLink>
            <NavLink className='menu' to='/publicaciones'>Vehiculos Publicados</NavLink>
            <NavLink className='menu' to='/nuevos'>Nuevos</NavLink>
            <NavLink className='menu' to='/usados'>Usados</NavLink>
          </Nav>
          <Nav className='navPrivado'>
            {usuario.conectado &&
              <>
                <div className='navPrivado'>
                <NavLink className='menu' to='/publicar'>Publicar</NavLink>
                <NavLink className='menu' to='/mispublicaciones'>Mis Publicaciones</NavLink>
                <NavLink className='menu' to='/misfavoritos'>Mis Favoritos</NavLink>
                </div>
                <NavDropdown className='menu' title={<span><img src={`../avatar/${usuario.avatar}.png`} alt="Avatar seleccionado" className="avatar-img" /> Usuario: {usuario.nombre} {usuario.apellido}</span>} id="nav-dropdown">
                  <NavDropdown.Item  eventKey="4.1">
                    <NavLink className='menu'to='/miperfil'>Mi Perfil</NavLink>
                  </NavDropdown.Item>
                
                </NavDropdown>
                
              </>
            }
          </Nav>
          <Form className="d-flex">
            {usuario.conectado ?

              (<NavLink to='/'><Button className='btnBarra' onClick={cerrarSesion}>Cerrar Sesion</Button></NavLink>) :
              (<>
                <NavLink to='/ingresar'><Button className="btnBarra">Ingresar</Button></NavLink>
                <NavLink to='/registrar'><Button className='btnBarra'>Registrar</Button></NavLink>
              </>)}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barra;

