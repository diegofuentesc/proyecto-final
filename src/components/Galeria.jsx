import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CardAuto from "./CardAuto.jsx";
import ContextoGlobal from "../contexts/ContextoGlobal.jsx";

const Galeria = ({fav = false}) => {
  const { autos, search, combustibleFilter,  tipoCaja } = useContext(ContextoGlobal);


  let results = [];

  if (!search) {
    results = autos;
  } else {
    results = autos.filter((dato) =>
      dato.titulo.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  if (combustibleFilter) {
    results = results.filter(
      (auto) => auto.combustible.toLowerCase() === combustibleFilter.toLowerCase()
    );
  }

  if (tipoCaja) {
    results = results.filter(
      (auto) => auto.transmision.toLowerCase() === tipoCaja.toLowerCase()
    );
  }

  return (
    <Container className="galeria">
     <Row md={4}>
        { results.filter((auto) => {


            if(fav) {
               return auto.liked?auto:null;
            } else {
               return auto;
            }
         }).map((auto) => {
            
                 return <Col key={auto.id}><CardAuto auto={auto}></CardAuto></Col>
            })
        }
     </Row>

    </Container>


  );
};

export default Galeria;