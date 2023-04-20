import React, { useContext } from 'react'
import { Modal, Form } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import ContextoGlobal from '../contexts/ContextoGlobal';

const ModalDetalle = () => {

    const { abrirModal, modal } = useContext(ContextoGlobal);
    
  return (
    <div className="container">
    <Modal show={modal} onHide={abrirModal}>
      <Modal.Header closeButton>
        <Modal.Title>Contacto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Ingresa tu email" />
          </Form.Group>

          <Form.Group controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingresa tu nombre" />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Ingresa tu mensaje"
              rows={3}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  </div>
  )
}

export default ModalDetalle