import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App({varPedido}) {
  const [pedido, setPedido] = useState("");
  const [clique, setClique] = useState(false)
  const [atualizar, setAtualizar] = useState()

  function handleChange(valor) {
    setPedido(valor)
  }
  useEffect(()=>{
    setTimeout(()=>{
      setAtualizar(pedido)   
      console.log("Componente atualizado")
    }, 2000)
    
  }, [clique])
 


  return (
    <>
    <input type="text" placeholder='Digite seu pedido' onChange={(e)=> {handleChange(e.currentTarget.value)}}></input>
    <button onClick={()=>{setClique(!clique)}}>Enviar</button>
     <h1>
      Seu pedido: {atualizar}
     </h1>
     <button onClick={()=>{alert("Pedido cancelado"), setAtualizar(""), setAtualizar(!clique), setPedido("")}}>Cancelar pedido</button>
    </>
  )
}

export default App
