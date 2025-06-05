import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2 - Imagem em assets
import Night from "./assets/night.jpg"
import Data from './components/Data'

// 4 - Renderização de lista
import ListRender from './components/ListRender'

// 7 - Renderização condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - Props
import ShowUserName from './components/ShowUserName'

// 9 - desestruturando props
import CarDetails from './components/CarDetails'


// 11 - renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 123123332 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
]

// 12 - Fragments
import Fragment from './components/Fragment'

//13 - Children
import Container from './components/Container'

//14 - Função em prop
import ExecuteFunction from './components/ExecuteFunction'

//15 - state lift
import Message from './components/Message'
import { useState } from 'react'
import ChangeMessage from './components/ChangeMessage'


function App() {
  const [count, setCount] = useState(0)

  //14 - Função em prop
  function ShowMessage() {
    console.log('Evento no componente pai')
  }

  //15 - state lift
  const [message, setMessage] = useState("");

  const handleMessage = (msg)=>{
    setMessage(msg);
  }

  return (
    <div style={{ paddingBottom: '500px' }}>
      <h1>
        Avançando em React
      </h1>

      {/* 1 Imagem em public */}
      <img src='/img.jpg' />

      {/* 2 Imagem em assets */}
      <img src={Night} />

      {/* 3 useState*/}
      <div>
        <Data />
      </div>

      {/*4 Renderização de lista*/}
      <ListRender />

      {/*7 Render condicional*/}
      <ConditionalRender />

      {/*8 Props*/}
      <ShowUserName name="Matheus" />

      {/*9 - desestruturando props*/}
      <CarDetails brand="VW" km={999} color="Vermelho" />

      {/* 10 reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={1234} color="Branco" />
      <CarDetails km={99997} brand="Audi" color="Vermelho" />

      {/* 11 - renderização de listas com componente */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}

      {/* 12 - Fragments */}
      <Fragment />

      {/* 13 - Children */}
      <Container>
        <p>
          Alguma coisa
        </p>
      </Container>

      {/* 14 Função em prop */}
      <ExecuteFunction myFunction={ShowMessage} />

      {/* /15 - state lift */}
      <Message msg={message}/>
      <ChangeMessage handleMessage={handleMessage} />
    </div>
  )
}

export default App
