import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import ContextoGlobal from '../contexts/ContextoGlobal';
import { useNavigate } from 'react-router-dom';
import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import avatar4 from '../img/avatar4.png';
import avatar5 from '../img/avatar5.png';
//import { useForm } from 'react-hook-form';

const Registrar = () => {
  // const { register, formState: { errors }, handleSubmit } = useForm();
  const { lstUsuarios, setUsuario, AlertaRegistro, avatar, setAvatar } = useContext(ContextoGlobal);
  const navigate = useNavigate();


  function registrarUsuario(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    const nombre = event.target.elements.nombre.value;
    const apellido = event.target.elements.apellido.value;
    const correo = event.target.elements.correo.value;
    const telefono = event.target.elements.telefono.value;
    const clave = event.target.elements.clave.value;
    //const avatar = event.target.elements.avatar.value;

    if (!avatar) {
      alert('Debe seleccionar un avatar');
      return;
    }

    lstUsuarios.push({
      nombre: nombre,
      apellido: apellido,
      email: correo,
      clave: clave,
      telefono: telefono,
      avatar: avatar
    });

    let usuarioValido = null;
    usuarioValido = lstUsuarios.find(
      (usuarioReg) => usuarioReg.email === correo && usuarioReg.clave === clave
    );

    if (usuarioValido !== null) {
      setUsuario(true);
      AlertaRegistro();
      setTimeout(() => {
        navigate('/ingresar');
      }, 3000);
    } else {
      console.log('Usuario no encontrado');
    }
    
  }




  return (
    <Container className="formRegistrar">
      <h1>Registrar</h1>
      <Form className="contenidoFormIngresar" onSubmit={registrarUsuario}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre"
          />

        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese apellido" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="correo">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Ingrese correo" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="telefono" placeholder="Ingrese telefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" placeholder="Ingrese telefono" />

        </Form.Group>
        <Form.Group className="mb-3" controlId="clave">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese una contraseña" />

        </Form.Group>
        <Form.Group className="mb-3 selectAavatar" controlId="avatar">
          <Form.Label>Avatar</Form.Label>
          <div className="avatar-options">
            <div className={`avatar-option ${avatar === 'avatar1' ? 'selected' : ''}`} onClick={() => setAvatar('avatar1')}>
              <img src={avatar1} alt="Avatar 1" />
            </div>
            <div className={`avatar-option ${avatar === 'avatar2' ? 'selected' : ''}`} onClick={() => setAvatar('avatar2')}>
              <img src={avatar2} alt="Avatar 2" />
            </div>
            <div className={`avatar-option ${avatar === 'avatar3' ? 'selected' : ''}`} onClick={() => setAvatar('avatar3')}>
              <img src={avatar3} alt="Avatar 3" />
            </div>
            <div className={`avatar-option ${avatar === 'avatar4' ? 'selected' : ''}`} onClick={() => setAvatar('avatar4')}>
              <img src={avatar4} alt="Avatar 4" />
            </div>
            <div className={`avatar-option ${avatar === 'avatar5' ? 'selected' : ''}`} onClick={() => setAvatar('avatar5')}>
              <img src={avatar5} alt="Avatar 5" />
            </div>
          </div>
        </Form.Group>
        <div className="btnFormIngresar">
          <Button className="btnIngresar" type="submit">
            Registrar
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default Registrar