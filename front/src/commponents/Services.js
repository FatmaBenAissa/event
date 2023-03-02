import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";



function Services() {
    const services=useSelector((state)=>state.product?.productList);
    console.log(services)
  return (
    <div className='cabl'>
      <video src="./video123.mp4" muted autoPlay/>
            <h1 id="purple">Nos Serivces</h1>
          
   <div className="baby">

   </div>
   <div className="car">
  {services?.map((el)=>
  <Link to={el.destination}><Card style={{ width: '30rem',height: "37rem",display:"flex",justifyContent:"space-around",margin:"18px", marginTop:"100px"}}>
      <Card.Img variant="top" src={el.img} />
      <Card.Body style={{backgroundColor:"rgb(246, 246, 246,1)"}}>
        <Card.Title id="world">{el.name}</Card.Title>
        <Card.Title>
        {el.product}
        </Card.Title>
        <Button id="hello" variant="primary">See More</Button>
      </Card.Body>
    </Card>
    </Link>
    )}
    </div>
    </div>
  )
}

export default Services