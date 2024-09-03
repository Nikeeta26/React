import { useState } from 'react'

import './App.css'
import TodoList from './TodoList'
import CreateProject from './CreateProject'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <TodoList /> */}
     <CreateProject />
    </>
  )
}

export default App
