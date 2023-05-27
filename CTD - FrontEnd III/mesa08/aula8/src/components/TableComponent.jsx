import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';



function TableComponent({ listaDisciplinas, notas }) {

    const atualizarNotas = (item, bool) => {
        let somaNotas = 0;
        let media = 0;
        let listaFiltrada = notas.filter(i => i.disciplina == item)
        if (bool) {
            listaFiltrada.forEach((disciplina) => {
                somaNotas += disciplina.nota
                media = somaNotas / listaFiltrada.length
                return media
            })

            return media.toFixed(2)
        }
        else return listaFiltrada.length
    }
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Disciplina</th>
                    <th>Quantidade de Alunos</th>
                    <th>Média das notas dos alunos</th>
                </tr>
            </thead>
            <tbody>
                {listaDisciplinas.map((item) => {
                    return (
                        <tr key={item}>
                            <td>{item}</td>
                            <td>{atualizarNotas(item)}</td>
                            <td>{atualizarNotas(item, true)}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </Table>
    )
}
export default TableComponent;