import { useState } from 'react'
import Home from './paginas/home/Home.tsx'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home titulo='teletubbies' texto='paia'/>
    </>
  )
}

export default App
