import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards.com'
import Formulario from './components/Formulario.com'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList.com'


function App() {
  const [listaCards, setListaCards] = useState([{nome: "naruto", url: "https://nerdhits.com.br/wp-content/uploads/2022/12/road-of-naruto-768x432.jpg"}])

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
