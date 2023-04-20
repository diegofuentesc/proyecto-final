import React, { useState, useContext } from 'react';
import { Form, Button, Container, FormGroup} from 'react-bootstrap';
import ContextoGlobal from '../contexts/ContextoGlobal';
import { useNavigate, useParams } from 'react-router-dom';

const EditarPublicacion = () => {
  const { autos, setAutos, usuario } = useContext(ContextoGlobal);
  const navigate = useNavigate();
  const { id } = useParams();
  const idxAuto = autos.findIndex((a) => a.id === Number(id));
  const autoDetalle = autos[idxAuto];

  const [titulo, setTitulo] = useState(autoDetalle.titulo);
  const [marca, setMarca] = useState(autoDetalle.marca);
  const [modelo, setModelo] = useState(autoDetalle.modelo);
  const [kilometraje, setKilometraje] = useState(autoDetalle.kilometraje);
  const [ano, setAno] = useState(autoDetalle.ano);
  const [duenos, setDuenos] = useState(autoDetalle.duenos);
  const [combustible, setCombustible] = useState(autoDetalle.combustible);
  const [transmision, setTransmision] = useState(autoDetalle.transmision);
  const [precio, setPrecio] = useState(autoDetalle.precio);
  const [estado, setEstado] = useState(autoDetalle.estado);
  const [detalles, setDetalles] = useState(autoDetalle.detalles);
  const [imagen, setImagen] = useState(autoDetalle.imagen);
  const [imagen2, setImagen2] = useState(autoDetalle.imagen2);
  const [imagen3, setImagen3] = useState(autoDetalle.imagen3);

  const actualizarPublicacion = () => {
    const publicacionActualizada = {
      id: autos.length + 1,
      publicitado_por: `${usuario.nombre} ${usuario.apellido}`,
      telefono: `${usuario.telefono}`,
      conectado: true,
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
      imagen: imagen,
      imagen2: imagen2,
      imagen3: imagen3
    }
    const nuevosAutos = [...autos];
    nuevosAutos[idxAuto] = publicacionActualizada;
    setAutos(nuevosAutos);
    navigate('/homePrivado');
  }

  return (
    <Container className="formIngresar">
      <h1>Editar Publicación</h1>
      <Form className="contenidoFormIngresar" onSubmit={actualizarPublicacion}>
        <Form.Group className="mb-3" controlId="titulo">
          <Form.Label>Titulo publicacion</Form.Label>
          <Form.Control type="text" onChange={(e) => setTitulo(e.target.value)} placeholder="Ingrese titulo publicacion" value={titulo} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="marca">
          <Form.Label>Marca</Form.Label>
          <Form.Control type="text" onChange={(e) => setMarca(e.target.value)} placeholder="Ingrese marca" value={marca} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="modelo">
          <Form.Label>Modelo</Form.Label>
          <Form.Control type="text" onChange={(e) => setModelo(e.target.value)} placeholder="Ingrese correo" value={modelo} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="kilometraje">
          <Form.Label>Kilometraje</Form.Label>
          <Form.Control type="text" onChange={(e) => setKilometraje(e.target.value)} placeholder="Ingrese kilometraje" value={kilometraje} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="ano">
          <Form.Label>Año</Form.Label>
          <Form.Control type="text" onChange={(e) => setAno(e.target.value)} placeholder="Ingrese año" value={ano} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="duenos">
          <Form.Label>Dueños anteriores</Form.Label>
          <Form.Control type="text" onChange={(e) => setDuenos(e.target.value)} placeholder="Ingrese cantidad de dueños" value={duenos} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="combustible">
          <Form.Label>Tipo Combustible</Form.Label>
          <Form.Control type="text" onChange={(e) => setCombustible(e.target.value)} placeholder="Ingrese tipo combustible" value={combustible} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="transmision">
          <Form.Label>Tipo Transmision</Form.Label>
          <Form.Control type="text" onChange={(e) => setTransmision(e.target.value)} placeholder="Ingrese tipo transmision" value={transmision} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="estado">
          <Form.Label>Condicion</Form.Label>
          <Form.Control type="text" onChange={(e) => setEstado(e.target.value)} placeholder="Ingrese condicion" value={estado} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="precio">
          <Form.Label>Precio</Form.Label>
          <Form.Control type="text" onChange={(e) => setPrecio(e.target.value)} placeholder="Ingrese precio" value={precio} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="detalles">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" onChange={(e) => setDetalles(e.target.value)} placeholder="Ingrese descripcion" value={detalles} />
        </Form.Group >
        <FormGroup className="mb-3" controlId="imagen">
          <div class="mb-3">
            <label for="formFile" class="form-label">Selecciona una imagen</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
        </FormGroup>

        <FormGroup className="mb-3" controlId="imagen2">
          <div class="mb-3">
            <label for="formFile" class="form-label">Selecciona una imagen</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
        </FormGroup>

        <FormGroup className="mb-3" controlId="imagen3">
          <div class="mb-3">
            <label for="formFile" class="form-label">Selecciona una imagen</label>
            <input class="form-control" type="file" id="formFile" />
          </div>
        </FormGroup>
        <div className="btnFormIngresar">
          <Button className="btnIngresar" type="submit">
            Guardar Cambios
          </Button>
        </div>
      </Form>
    </Container>
  )
}

export default EditarPublicacion