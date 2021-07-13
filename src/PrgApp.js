import "./prgApp.css"
import PrgHeader from "./components/PrgHeader"
import PrgMain from "./components/PrgMain"
import StudentInfo from './components/StudentInfo'
import { useState } from 'react'

function App() {
  const [open,setOpen] = useState('false')
  const [section,getSection] = useState(1)
  return (
    <div className="App">
      <PrgHeader/>
      <PrgMain open={open} setOpen={setOpen} getSection={getSection}/>
      <StudentInfo open={open} setOpen={setOpen} section={section}/>
    </div>
  )
}

export default App
