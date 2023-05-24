import React from "react";
import Card from 'react-bootstrap/Card'
import { Rating } from "react-simple-star-rating";

function CardsFilme({url, nome, avaliacao}){
    return (
        <Card style={{height: '25rem'}}>
            <Card.Img src={url} style={{height: '17rem'}}/>
            <Card.Title className="mt-2"> {nome} </Card.Title>
            <Card.Text> <Rating initialValue={avaliacao} readonly='true'></Rating></Card.Text>

        </Card>
    )
}

export default CardsFilme;