import React from "react";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import Description from "../commponents/Description";
const Ballons = () => {
  const ballons = useSelector((state) => state.services?.servicesList);
  console.log(ballons);
  return (
    <div className="avez">
    <div className="bank">
      {ballons?.map((el) => (
        <Card
          style={{
            width: "31rem",
            height: "39rem",
            margin: "20px",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Card.Img variant="top" src={el.img} />
          <Card.Body style={{ backgroundColor: "rgb(246, 246, 246,1)" }}>
            <Card.Title id="world">{el.name}</Card.Title>
            <Card.Title style={{ fontSize: "13px", color: "#7d7d7d" }}>
              {el.price}
            </Card.Title>
            <Description el={el} />
            {/* <Link to={`/modall/ ${el.name}`}> <button  id="prod5">Réservez</button> */}
          </Card.Body>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default Ballons;
