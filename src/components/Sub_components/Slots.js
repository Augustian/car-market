import React from 'react';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";

class Slots extends React.Component {

  render() {
    let info = this.props.info;
    return (
        <Card className="slot_car">
          <Card.Img variant="top" src={info.Image[0]} />
          <Card.Body>
            <Card.Title><Link to={"/car?id=" + info.ID}>{info.Name}</Link></Card.Title>
            <Card.Text style={{ fontSize: "12px" }}>
              {info.DateRelease} года, {info.FuelType}, Пробег {info.Mileage}, Привод {info.TypeDrive}</Card.Text>
          </Card.Body>
          <h5>{info.Price.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} руб.</h5>
        </Card>
      
    );
  }
}
export default Slots;