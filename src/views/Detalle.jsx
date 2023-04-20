import React, { useContext } from 'react'
import { Carousel, Button } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import ContextoGlobal from '../contexts/ContextoGlobal.jsx';
import Accordion from 'react-bootstrap/Accordion';
import "../style.css"
import ModalDetalle from './ModalDetalle.jsx';

const Detalle = () => {



    const { id } = useParams();


    const { autos, abrirModal, usuario} = useContext(ContextoGlobal);
    


    const idxAuto = autos.findIndex((a) => a.id === Number(id));

    console.log(autos.telefono)


    const autoDetalle = autos[idxAuto];
    console.log(autos[idxAuto])

    const Wsp = () => {
        const url = `https://api.whatsapp.com/send?phone=${autoDetalle.telefono}&text=Hola%20!%20me%20interesa%20el%20${autoDetalle.titulo}%20que%20publicaste%20en%20la%20web%20mall%20del%20auto`;
        window.open(url, '_blank');
      };

    //   const autoDetalle = autos.filter((a) => a.id === id)

    return (

     
        <div className="container vDetalle">
            <ModalDetalle></ModalDetalle>
            <div className="row">
                <div className="col-md-6">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={autoDetalle.imagen}
                                alt="Imagen 1"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={autoDetalle.imagen2}
                                alt="Imagen 2"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={autoDetalle.imagen3}
                                alt="Imagen 3"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <div className="col-md-6">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>{autoDetalle.titulo}</h2>
                                <br></br>
                                <p>
                                    <ul>
                                        <li>Año:{autoDetalle.ano}</li>
                                        <li>Kilometraje:{autoDetalle.kilometraje}</li>
                                        <li>Dueños:{autoDetalle.duenos}</li>
                                        <li>Transmision:{autoDetalle.transmision}</li>
                                        <li>Precio:${autoDetalle.precio}</li>
                                        

                                    </ul>
                                </p>
                                <div className="d-flex justify-content-flex-stat">
                                <Button className='btnContacto' onClick={abrirModal}>Contacto</Button>
                                <Button variant="success"  onClick={Wsp}>Enviale un WhatsApp</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
                <div className="col-md-12 acordeon">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Comentarios del vendedor</Accordion.Header>
                            <Accordion.Body>
                                {autoDetalle.detalles}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
        





    )
}

export default Detalle