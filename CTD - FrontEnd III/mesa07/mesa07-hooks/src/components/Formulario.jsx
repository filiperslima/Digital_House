import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from 'react-simple-star-rating';
// import listaFilmes from './listaFilmes'

// {add como prop {adicionarFilme}}
function Formulario({ adicionarFilme }) {
  const [novoFilme, setNovoFilme] = useState({});
  const [rating, setRating] = useState(0)

  const inserirDados = (campo, valor) => {
    setNovoFilme(
      { ...novoFilme, [campo]: valor })
  }
  const handleRating = (rate) => {
    setRating(rate)
    inserirDados('avaliacao', rate)
  }
  function resetarRating() {
    setRating(0)
  }
  const handleSubmit = e => {
    e.preventDefault()
    // listaFilmes.push(filmes)
    adicionarFilme(novoFilme)
    e.target.parentElement.reset()
    resetarRating()
  }

  return (
    <Form className='border-0 rounded p-4' style={{ backgroundColor: "#f5f5f5" }} >
      <Form.Group className="mb-3" controlId="formNomeFilme">
        <Form.Label>Nome do filme </Form.Label>
        <Form.Control type="text" placeholder="Informe aqui um filme" onChange={(e) => inserirDados('nome', e.target.value)} />
        <Form.Text className="text-muted">
          Não se preocupe, qualquer filme será bem-vindo
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formImageFilme">
        <Form.Label>Imagem</Form.Label>
        <Form.Control type="text" placeholder="Insira uma URL válido de imagem" onChange={(e) => inserirDados('url', e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formRating">
        <Rating onClick={handleRating} initialValue={rating}></Rating>
      </Form.Group>
      <Button type="submit" onClick={(e) => { handleSubmit(e) }}>Salvar</Button>

    </Form>

  )
}
export default Formulario; 