import React from 'react'
import { useState } from 'react'
import './App.css'
import FormComponent from './components/FormComponent'
import TableComponent from './components/TableComponent'
const listaDisciplinas = ["Banco de Dados", "Desenvolvimento Frontend", "Desenvolvimento Backend"]

function App() {
  const [notas, setNotas] = useState([])
  // const [notasFiltradas, setNotasFiltradas] = useState([
  //   {
  //     disciplina: "Banco de Dados",
  //     qntdAlunos: 0,
  //     media: 0
  //   }
  // ])
  // atualizarTabela(){
    
  // }

  const adicionarNota = (novaNota) => {
    setNotas([...notas, novaNota])
    console.log()
  }
  return (
    <>
      <FormComponent listaDisciplinas={listaDisciplinas} adicionarNota={adicionarNota}></FormComponent>
      <TableComponent listaDisciplinas={listaDisciplinas} notas={notas}></TableComponent>
    </>
  )
}

export default App
