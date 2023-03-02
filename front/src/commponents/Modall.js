
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Modall = () => {
  const params=useParams();
  console.log(params);
  const user=useSelector((state)=>state.user?.user);
  console.log(user)
  const [show, setShow] = useState(false);
    const date=new Date();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 return (
   <div>
 <Form style={{marginTop:"150px" , position:"absolute", width:"42rem" }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name client</Form.Label>

        <Form.Control type="text" />
        <Form.Label>Name product</Form.Label>

<Form.Control type="text" value="{product?.name}"  />
<Form.Label>date</Form.Label>

<Form.Control type="date" placeholder="Enter date" />
<Form.Label>price</Form.Label>

<Form.Control type="text" placeholder="Enter price" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </div>

  );
}

   


export default Modall