import "./prgApp.css"
import PrgHeader from "./components/PrgHeader"
import PrgMain from "./components/PrgMain"
import StudentInfo from './components/StudentInfo'
import { useState } from 'react'

function App() {
  const [open,setOpen] = useState('false')
  return (
    <div className="App">
      <PrgHeader/>
      <PrgMain open={open} setOpen={setOpen}/>
      <StudentInfo open={open} setOpen={setOpen}/>
    </div>
  )
}

export default App
