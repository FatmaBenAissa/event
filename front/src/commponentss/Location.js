import React from 'react';
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Description from "../commponents/Description";
const Location = () => {
  const location = useSelector((state) => state.location?.locationList);
  console.log(location)
  return (
    <div className="lector">
   <div className="meuble">
       {location?.map((el) =>
                <Card style={{ width:'30rem', height:"33rem",margin:"20px", display:"flex", justifyContent:"space-around"}}>
                    <Card.Img style={{height:"235px"}} variant="top" src={el.img} />
                    <Card.Body  style={{  backgroundColor:"rgb(246, 246, 246,1)"  }}>
                        <Card.Title id="world">{el.name}</Card.Title>
                        <Card.Title style={{fontSize:"13px", color:"#7d7d7d"}} >
                            {el.price}
                        </Card.Title>
                        <Description el={el} />
                       
                    </Card.Body>
                </Card>
            )}        
   </div>
   </div>
  )
}

export default Location