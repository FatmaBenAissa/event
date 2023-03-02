import React from 'react';
import { useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Description from "../commponents/Description";


const Candy = () => {
  const candy = useSelector((state) => state.candy?.candyList);
    console.log(candy)
  return (
  <div>
   <div className="candy">
   {candy?.map((el) =>
   <div className="container">
        <div className="employee-container">
          <div className="row">
            <div className="col-lg-4 employee-1">
              <div className="employee">
                <div className="employee-image">
                  <img src={el.img} className="img-fluid d-block m-auto" alt="employee-image" />
                </div>
                <div className="employee-details">
                  <div className="employee-name">
                    <h1 className="text-center">{el.name}<br /><span className="employee-role">{el.price}</span></h1>
                    
            <Description el={el} />
                    
                    </div>
                 
                </div></div></div></div></div></div>
                )}
 </div>
 </div>
    );
  }


export default Candy