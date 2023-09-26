import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function CardComp (props) {
    let [counter, setCounter] =useState(0)

    function addToFavorites(){
    setCounter(counter+1)
    }
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          {props.description}
          </Card.Text>
          <Card.Text>
          ★ {counter}
          </Card.Text>
          <Button variant="primary" onClick={addToFavorites}>Add to favorites</Button>
        </Card.Body>
      </Card>
    )
}

export default CardComp;