import { useState } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import './App.css'
let show = ()=>{
  console.log("button was click");
};
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Use MuterialUI</h1>
         <Button variant="contained" onClick={show} startIcon={<DeleteIcon />}>Click me</Button>
         <Alert severity="success">This is a success Alert.</Alert>

    </>
  )
}

export default App
