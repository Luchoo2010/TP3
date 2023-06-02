import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../Css/Main.css"



const Main = (props) => {

  return (
  <div className="todo">
    <Card className="Card" bg="light" style={{ width: "18rem" }}>
    <Card.Img variant="top" src="../images.jpg" />
    <Card.Body>
    <Card.Title> <h2>Carta Personal</h2></Card.Title>
    <Card.Text>
      <h5>
        Mi nombre es {props.alumno.nombre}, tengo {props.alumno.edad} años, vivo en {props.alumno.localidad} y
        actualmente me preparo para ser {props.alumno.titulo} en la UTN.
        </h5>
    </Card.Text>
    <Button variant="secondary">Enviar Presentacion</Button>
    </Card.Body>
    </Card>

    <br />
  </div>
    
  );
};  

export default Main;
