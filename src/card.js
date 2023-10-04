import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useAuth0 } from '@auth0/auth0-react';

function CardComp (props) {
  let [show, setShow] = useState(false);
  let {user} = useAuth0()
  function handleShow(){
    setShow(!show)
  }
  function saveToLocalStorage (){

    if(localStorage.getItem("favorites")){

    let stringData = localStorage.getItem("favorites")
    let arr = JSON.parse(stringData);
    arr.push({...props, email:user.email}) 

    // -----------------------------

    let stringedData = JSON.stringify(arr)

    localStorage.setItem("favorites", stringedData)
  }
    else {

      let arr = [];
      arr.push({...props, email:user.email})
      let stringedData = JSON.stringify(arr)
  
      localStorage.setItem("favorites", stringedData)

    }
  }




    return(
      <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.image}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Button variant="primary" onClick={handleShow}>Show Details</Button>
          {props.showFavorites? <Button onClick={saveToLocalStorage}>Add to Favorites</Button>
          : <Button onClick={saveToLocalStorage} style={{display:"none"}}>Add to Favorites</Button>
          
          }
          <Button onClick={props.handleDelete}>Delete</Button>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleShow}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.description} <br /> <b>Price: {props.price}$</b></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleShow}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default CardComp;