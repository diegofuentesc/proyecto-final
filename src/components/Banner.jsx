import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/banner1.jpg';
import img2 from '../img/banner2.jpg';
import img3 from '../img/banner3.jpg';

function Banner() {
  return (
    <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3} style={{height:'400px'}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>El vehiculo que buscas esta aqui!</h3>
          <p>Publica o compra</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2} style={{height:'400px'}}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1} style={{height:'400px'}}
          alt="Second slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default Banner;