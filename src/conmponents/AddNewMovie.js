import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from "axios"
import Swal from 'sweetalert2'

function Example() {
  const [show, setShow] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [body, setBody] = useState("");
  const [namee, setNamee] = useState("");
  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const AddNewMovie=()=>{
    axios.post("http://192.168.3.98:3333/api/createnewpost",{
        imageUrl:imageUrl,
        body:body,
        namee:namee,
        title:title
    }).then((res)=>{
        if(res.data ==="poste done"){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your work has been saved',
                showConfirmButton: false,
                timer: 1500
              })
              window.location.href="http://localhost:3000"
              handleClose()
        }
    })
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        NEW Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(event)=>setTitle(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" onChange={(event)=>setNamee(event.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Content</Form.Label>
        <Form.Control type="Text" placeholder="Enter your Content" onChange={(event)=>setBody(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>imageUrl</Form.Label>
        <Form.Control type="text" placeholder="Enter your imageUrl"  onChange={(event)=>setImageUrl(event.target.value)}/>
      </Form.Group>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddNewMovie} >
            AddMovie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example