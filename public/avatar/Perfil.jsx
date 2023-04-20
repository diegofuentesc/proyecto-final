import React from 'react'
//import { useForm } from 'react-hook-form';
import { Form, Container, Button } from 'react-bootstrap';
import { useContext } from 'react';
import ContextoGlobal from '../contexts/ContextoGlobal';



const Perfil = () => {

  //const { register, formState: { errors }, handleSubmit } = useForm();
  const { usuario } = useContext(ContextoGlobal);

  console.log(usuario.avatar);

  return (
    <Container className="formIngresar">
      <h1>Registrar</h1>

      <img src={`../img/${usuario.avatar}.png`} alt="Avatar seleccionado" />

      <Form className="contenidoFormIngresar">
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Ingrese apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="correo">
          <Form.Label>Correo</Form.Label>
          <Form.Control type="email" placeholder="Ingrese correo"  />
        </Form.Group>
         <Form.Group className="mb-3" controlId="telefono" placeholder="Ingrese correo">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="number" placeholder="Ingrese telefono" />
        
        </Form.Group>
        <Form.Group className="mb-3" controlId="clave">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Ingrese una contraseña" />

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

export default Perfil