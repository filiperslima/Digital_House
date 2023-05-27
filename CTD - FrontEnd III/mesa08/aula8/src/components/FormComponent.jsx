import { Button } from "react-bootstrap";
import React, { useState } from "react";

import Form from 'react-bootstrap/Form'

function FormComponent({ adicionarNota, listaDisciplinas, atualizarTabela }) {
    const [novaNota, setNovaNota] = useState({disciplina: "Banco de Dados", nota: 0})

    const salvarDados = (campo, valor) => {
        setNovaNota({ ...novaNota, [campo]: valor })
        // qntd de alunos === quantas notas foram inseridas nessa disciplina
        // 
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        adicionarNota(novaNota)
        
    }
    const validarNota = (valor) => {
        if (valor >= 0 && valor <= 10)
            return true
        else
            return false
    }
    return (
        <Form className="d-flex justify-content-between mb-3">
            <Form.Group>
                <Form.Label>Disciplinas</Form.Label>
                <Form.Select placeholder="Selecione uma disciplina" onChange={(e) => { salvarDados('disciplina', e.target.value) }}>
                    {listaDisciplinas.map((disciplina) => {
                        return (
                            <option key={disciplina + "option"}>{disciplina}</option>
                        )
                    })}
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label >Nota do aluno</Form.Label>
                <Form.Control type="number" min={0} max={10} step={0.1} defaultValue="0" required onChange={(e) => { validarNota(e.target.value) ? salvarDados('nota', parseFloat(e.target.value)) : e.target.value = '0' }}></Form.Control> {/*melhorar essa validação*/}
                <Form.Text>Entre 0 e 10</Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => { handleSubmit(e) }}>
                Submit
            </Button>
        </Form>


    )
}

export default FormComponent;