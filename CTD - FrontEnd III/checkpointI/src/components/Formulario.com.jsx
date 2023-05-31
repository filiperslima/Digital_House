import React, { useState } from "react";
import { Alert, Button, Form, OverlayTrigger, Tooltip } from "react-bootstrap";

function Formulario({ fnOnSubmit }) {
    const [dado, setDado] = useState({})
    const [isValid, setIsValid] = useState(false)
    const salvarDado = (campo, valor) => {
        setDado({ ...dado, [campo]: valor })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if (isValid)
            fnOnSubmit(dado)
        else
            console.log('formulario Invalido')
    }
    const validarUrl = (url) => {
        const countNumbers = url.replace(/\D/g, '').length
        if (url.length >= 6 && countNumbers >= 1) {
            salvarDado('url', url)
            setIsValid(true)
        }
        else {
            console.log("Digite uma url válida")
            setIsValid(false)

        }

    }

    return (

        <Form>
            <Form.Group>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" onChange={(e) => { e.currentTarget.value.length >= 3 ? salvarDado('nome', e.currentTarget.value) : setIsValid(false) }}></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Url da imagem</Form.Label>
                <Form.Control type="text" onChange={(e) => { validarUrl(e.currentTarget.value) }}></Form.Control>
            </Form.Group>
            <Alert show={!isValid} variant='danger'><Alert.Heading>Por favor, verifique os dados inseridos no formulário</Alert.Heading></Alert>
            <Button onClick={(e) => { handleSubmit(e) }}>Salvar</Button>
        </Form>

    )
}

export default Formulario;