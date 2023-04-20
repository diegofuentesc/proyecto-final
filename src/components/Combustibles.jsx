import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Combustibles = () => {
  return (
    <div className='combustibles'>
        <Card className="text-center cardCombustible">
      <Card.Header>Conoce el valor de los combustibles</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted"></Card.Footer>
    </Card>
    </div>
  )
}

export default Combustibles