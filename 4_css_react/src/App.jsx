import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//2 Css de componente
import MyComponent from './components/MyComponent'
import Title from './components/Title'

//4 Css inline Dinâmico 
const n = 15;

//5 Classes dinâmicas
const redTitle = 2;


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* 1 Css global */}
      <h1>CSS no React</h1>

      {/* 2 Css de componente */}
      <MyComponent />
      <p>Pegou o CSS do componente</p>

      {/* 3 Css inline */}
      <p style={{ color: "blue", padding: "25px", borderTop: "1px solid doted blue" }}>
        Este elemento tem estilos inline
      </p>

      {/* 4 Css inline Dinâmico */}
      <h2 style={n > 10 ? { color: 'purple' } : { color: 'magenta' }}>
        Css dinâmico
      </h2>
      <h2 style={n > 20 ? { color: 'purple' } : { color: 'magenta' }}>
        Css dinâmico
      </h2>

      {/* 5 Classes dinâmicas */}
      <h2 className={redTitle ? 'red-title' : 'title'}>
        Este título terá uma classe
      </h2>

      {/* 6 CSS Modules */}
      <Title />

    </div>
  )
}

export default App
