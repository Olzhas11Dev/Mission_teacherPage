import "./prgApp.css"
import Prg_header from "./components/Prg_header"
import Prg_main from "./components/Prg_main"
import StudentInfo from './components/StudentInfo'
import { useState } from 'react'

function App() {
  const [open,setOpen] = useState('false')
  return (
    <div className="App">
      <Prg_header />
      <Prg_main open={open} setOpen={setOpen}/>
      <StudentInfo open={open} setOpen={setOpen}/>
    </div>
  )
}

export default App
