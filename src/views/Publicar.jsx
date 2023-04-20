import React from 'react';
import { Form, Button, Container, FormGroup } from 'react-bootstrap';
import { useContext } from 'react';
import ContextoGlobal from '../contexts/ContextoGlobal';
import { useNavigate } from 'react-router-dom';

const Publicar = () => {

  const { autos, setAutos, usuario } = useContext(ContextoGlobal);

  const navigate = useNavigate();

  //const usuarioConectado = lstUsuarios.find(usuario => usuario.nombre);
  console.log('Usuario actual:', usuario);
  console.log(autos)


  function nuevaPublicacion(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener los valores ingresados por el usuario
    const titulo = event.target.elements.titulo.value;
    const marca = event.target.elements.marca.value;
    const modelo = event.target.elements.modelo.value;
    const kilometraje = event.target.elements.kilometraje.value;
    const ano = event.target.elements.ano.value;
    const duenos = event.target.elements.duenos.value;
    const combustible = event.target.elements.combustible.value;
    const transmision = event.target.elements.transmision.value;
    const precio = event.target.elements.precio.value;
    const estado = event.target.elements.estado.value;
    const detalles = event.target.elements.detalles.value;
    const imagen = event.target.elements.imagen.files[0];
    const imagen2 = event.target.elements.imagen2.files[0];
    const imagen3 = event.target.elements.imagen3.files[0];

    // Agregar un nuevo objeto de usuario al arreglo lstUsuarios
    setAutos([
      ...autos,
      {
        id: autos.length + 1,
        publicitado_por: `${usuario.nombre} ${usuario.apellido}`,
        telefono: `${usuario.telefono}`,
        titulo: titulo,
        marca: marca,
        modelo: modelo,
        kilometraje: kilometraje,
        ano: ano,
        duenos: duenos,
        combustible: combustible,
        transmision: transmision,
        precio: precio,
        estado: estado,
        detalles: detalles,
        imagen: URL.createObjectURL(imagen),
        imagen2: URL.createObjectURL(imagen2),
        imagen3: URL.createObjectURL(imagen3)
      },
    ]);

    navigate('/homeprivado');
  }
  return (
    <Container className="formPublicar" onSubmit={nuevaPublicacion}>
      <h1>Publicar</h1>
      <Form>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Titulo publicacion</Form.Label>
          <Form.Control type="text" placeholder="Ingrese titulo publicacion" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="marca">
          <Form.Label>Marca</Form.Label>
          <Form.Control type="text" placeholder="Ingrese marca" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="modelo">
          <Form.Label>Modelo</Form.Label>
          <Form.Control type="text" placeholder="Ingrese correo" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="kilometraje">
          <Form.Label>Kilometraje</Form.Label>
          <Form.Control type="text" placeholder="Ingrese kilometraje" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ano">
          <Form.Label>Año</Form.Label>
          <Form.Control type="text" placeholder="Ingrese año" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="duenos">
          <Form.Label>Dueños anteriores</Form.Label>
          <Form.Control type="text" placeholder="Ingrese cantidad de dueños" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="combustible">
          <Form.Label>Tipo Combustible</Form.Label>
          <Form.Control type="text" placeholder="Ingrese tipo combustible" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="transmision">
          <Form.Label>Tipo Transmision</Form.Label>
          <Form.Control type="text" placeholder="Ingrese tipo transmision" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="estado">
          <Form.Label>Condicion</Form.Label>
          <Form.Control type="text" placeholder="Ingrese condicion" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="text" placeholder="Ingrese precio" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="detalles">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" placeholder="Ingrese descripcion" />
        </Form.Group >
        <FormGroup className="mb-3" controlId="imagen">
          <div class="mb-3">
            <label for="formFile" class="form-label">Selecciona una imagen 1</label>
            <input class="form-control" type="file" id="formFile" name="imagen" />
          </div>
        </FormGroup>
        <FormGroup className="mb-3" controlId="imagen2">
          <div class="mb-3">
            <label for="formFile" class="form-label">Selecciona una imagen 2</label>
            <input class="form-control" type="file" id="formFile" name="imagen2" />
          </div>
        </FormGroup>
        <FormGroup className="mb-3" controlId="imagen3">
          <div class="mb-3">
            <label for="formFile" class="form-label">Selecciona una imagen 3</label>
            <input class="form-control" type="file" id="formFile" name="imagen3" />
          </div>
        </FormGroup>
        <div className="btnFormIngresar">
          <Button className="btnIngresar" type="submit">
            Publicar
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default Publicar