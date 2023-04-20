import { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ContextoGlobal from '../contexts/ContextoGlobal.jsx';
import { useNavigate } from 'react-router-dom';


function Ingresar() {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { lstUsuarios, setUsuario, AlertaError, AlertaExitosa } = useContext(ContextoGlobal);
  const navigate = useNavigate();
  console.log(lstUsuarios);

  const validarUsuario = () => {

    const usuarioValido = lstUsuarios.find((usuario) => usuario.email === email && usuario.clave === password);

    if (usuarioValido){

      setUsuario({conectado: true, 
                  id: usuarioValido.id,
                  nombre: usuarioValido.nombre, 
                  apellido: usuarioValido.apellido, 
                  email: usuarioValido.email,
                  telefono: usuarioValido.telefono, 
                  clave: usuarioValido.clave,
                  avatar: usuarioValido.avatar});
      AlertaExitosa();
      navigate('/homeprivado');
    }else{
      AlertaError();  

    }
}
  return (
    
    <Container className='formIngresar'>

      <h1>Login</h1>
    <Form className='contenidoFormIngresar'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Correo electronico</Form.Label>
        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Correo electronico" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
      </Form.Group>
      <div className='btnFormIngresar'>
      <Button onClick={() => validarUsuario()} className='btnIngresar' type="button">
         Ingresar
      </Button>
      </div>
    </Form>
    </Container>
  );
}

export default Ingresar;