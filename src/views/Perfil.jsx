import React, { useState } from 'react'
//import { useForm } from 'react-hook-form';
import { Form, Container, Button } from 'react-bootstrap';
import { useContext } from 'react';
import ContextoGlobal from '../contexts/ContextoGlobal';
import avatar1 from '../img/avatar1.png';
import avatar2 from '../img/avatar2.png';
import avatar3 from '../img/avatar3.png';
import avatar4 from '../img/avatar4.png';
import avatar5 from '../img/avatar5.png';
import { useNavigate } from 'react-router-dom';



const Perfil = () => {

  const { usuario, lstUsuarios, setUsuario } = useContext(ContextoGlobal);
  const navigate = useNavigate();

  const [nombre, setNombre] = useState(usuario.nombre);
  const [apellido, setApellido] = useState(usuario.apellido);
  const [email, setEmail] = useState(usuario.email);
  const [telefono, setTelefono] = useState(usuario.telefono);
  const [password, setPassword] = useState(usuario.clave);
  const [avatar, setAvatar] = useState(usuario.avatar);

  const actualizarUsuario = () => {

    const posicionActual = lstUsuarios.findIndex((u) => u.id === u.id);

    const usuarioActualizado = {
      conectado: true,
      id: usuario.id,
      nombre: nombre,
      apellido: apellido,
      email: email,
      telefono: telefono,
      clave: password,
      avatar: avatar

    }
   
    setUsuario(usuarioActualizado)
    lstUsuarios[posicionActual]= usuarioActualizado;
    

    navigate('/homePrivado');


  }



  //const { register, formState: { errors }, handleSubmit } = useForm();


  console.log(usuario);

  return (


    <Container className="formPerfil">
    <h1>Mi perfil</h1>
    <Form className="contenidoFormPerfil row" onSubmit={actualizarUsuario}>
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <Form.Group className="mb-3" controlId="avatar">
          <div className='container'>
            <img src={`../avatar/${usuario.avatar}.png`} alt="Avatar seleccionado" className='avatarPerfil' />
          </div>
          <Form.Label className='seleccionAvatar' value={avatar}>Selecciona tu avatar</Form.Label>
          <div className="avatar-options2">
            <div className={`avatar-option2 ${avatar === 'avatar1' ? 'selected' : ''}`} onClick={() => setAvatar('avatar1')}>
              <img src={avatar1} alt="Avatar 1" />
            </div>
            <div className={`avatar-option2 ${avatar === 'avatar2' ? 'selected' : ''}`} onClick={() => setAvatar('avatar2')}>
              <img src={avatar2} alt="Avatar 2" />
            </div>
            <div className={`avatar-option2 ${avatar === 'avatar3' ? 'selected' : ''}`} onClick={() => setAvatar('avatar3')}>
              <img src={avatar3} alt="Avatar 3" />
            </div>
            <div className={`avatar-option2 ${avatar === 'avatar4' ? 'selected' : ''}`} onClick={() => setAvatar('avatar4')}>
              <img src={avatar4} alt="Avatar 4" />
            </div>
            <div className={`avatar-option2 ${avatar === 'avatar5' ? 'selected' : ''}`} onClick={() => setAvatar('avatar5')}>
              <img src={avatar5} alt="Avatar 5" />
            </div>
          </div>
        </Form.Group>
      </div>
      <div className="col-12 col-md-6">
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" onChange={(e) => setNombre(e.target.value)} placeholder="Ingrese nombre" value={nombre}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" onChange={(e) => setApellido(e.target.value)} placeholder="Ingrese apellido" value={apellido} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="correo">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Ingrese correo" value={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="telefono" placeholder="Ingrese telefono">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="text" onChange={(e) => setTelefono(e.target.value)} placeholder="Ingrese telefono" value={telefono} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="clave">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Ingrese una contraseña" value={password} />
        </Form.Group>
        <div className="btnFormIngresar">
          <Button className="btnIngresar" type="submit">
            Guardar
          </Button>
        </div>
      </div>
    </Form>
  </Container>
  )
}

export default Perfil