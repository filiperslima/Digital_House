import React from 'react';
import Card from 'react-bootstrap/Card';
import CardImg from 'react-bootstrap/esm/CardImg';
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCard({ nome, preco, imagem }) {
    return (
        <Card style={{width: '15rem'}}>
            <CardImg className='mt-4 img-fluid' src={imagem} style= {{height: '20vh', width: "10rem", alignSelf:'center'}} />
            <Card.Body>
                <Card.Title>{nome}</Card.Title>
                <h2>{preco}</h2>
            </Card.Body>
        </Card>
    );
}


export default ItemCard;

