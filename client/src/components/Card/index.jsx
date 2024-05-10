import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function ProductCard(props) {
  return (
    // wrap card in link to make clickable
    // <Link to={props.link} className=" col-sm-6 mb-3">

    <Card className="m-4" style={{ width: "18rem" }} key={props.key}>
      <Link to={`/products/${props.id}`}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          {/* <Button variant="primary"></Button> */}
        </Card.Body>
      </Link>
    </Card>
    /* </Link> */
  );
}

export default ProductCard;

//make a component and place in main.jsx element tag
//use css class to make a tag not show up bold blue font
