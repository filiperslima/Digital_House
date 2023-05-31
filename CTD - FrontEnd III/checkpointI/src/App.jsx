import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.com'
import Formulario from './components/Formulario.com'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList.com'


function App() {
  const [listaCards, setListaCards] = useState([{nome: "Azul royal", url: "https://cdn.shopify.com/s/files/1/2910/3910/products/tnt-azul-escuro-348685.jpg?v=1674239700"}])

  const atualizarLista = (card) =>{
    setListaCards( (listaAntiga)=> [...listaAntiga, card])

  }

  return (
    <>
    <Formulario fnOnSubmit={atualizarLista}></Formulario>
    <CardList
    dadosCards={listaCards}
    />
    
    </>
  )
}

export default App
