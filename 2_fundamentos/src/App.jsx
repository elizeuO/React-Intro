import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Importando componente
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Comentário JSX */}
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  )
}

export default App
