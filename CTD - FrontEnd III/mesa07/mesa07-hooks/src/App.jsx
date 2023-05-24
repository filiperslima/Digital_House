import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Formulario from './components/Formulario.jsx';
import CardsFilme from './components/CardsFilmes';
import { Rating } from 'react-simple-star-rating';
import { useEffect, useState } from 'react';
import listaFilmes from './components/listaFilmes';
import { Button, Row, Col } from 'react-bootstrap';


function App() {

  const [filmes, setFilmes] = useState(listaFilmes);

  // useEffect(() => {
  //   atualizarFilmes()
  // }, [filmes])

  // function atualizarFilmes() {
  //   setFilmes([...listaFilmes])
  // }
  function adicionarFilme(filme){
  setFilmes((filmesAntigos) =>[...filmesAntigos, filme])
  }

  return (
    <>
      <Row>
        {filmes.map((filme) => {
          return (
            <Col>
              <CardsFilme
                key={filme.nome}
                nome={filme.nome}
                url={filme.url}
                avaliacao={filme.avaliacao}
              />
            </Col>
          )
        })}
      </Row>
      <Formulario adicionarFilme={adicionarFilme} ></Formulario>
      {/* Adiciono aqui a função adicionarFilme={adicionarFilme} */}
    </>
  )
}


export default App;
