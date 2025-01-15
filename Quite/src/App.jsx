import { useState } from 'react'
import './App.css'
import Quite from './QuiteApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Quite></Quite>
       <h1>hello</h1>
    </>
  )
}

export default App
