import React from "react";
import { Card } from "react-bootstrap";

function Cards({nome, img}) {
    return (
        <Card>
            <Card.Title>{nome}</Card.Title>
            <Card.Img src={img}></Card.Img>
        </Card>
    )
}

export default Cards;