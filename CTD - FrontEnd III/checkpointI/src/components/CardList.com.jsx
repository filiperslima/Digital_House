import React, { useState } from "react";
import { CardGroup } from "react-bootstrap";
import Cards from "./Cards.com";

function CardList({ dadosCards }) {
    const [listaCards, setListaCards] = useState([...dadosCards])

    return (
        <CardGroup>
            {dadosCards.map((card, index)=>{
                return (
                <Cards
                nome = {card.nome}
                img = {card.url}
                key = {card + index}
                />
                )
              
            })}

        </CardGroup>
    )
}

export default CardList;