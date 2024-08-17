import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card/>
    </>
  )
}

export default App
