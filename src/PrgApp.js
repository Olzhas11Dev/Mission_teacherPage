import "./prgApp.css"
import Prg_header from "./components/Prg_header"
import Prg_main from "./components/Prg_main"
import PrgStudentSection from './components/PrgStudentSection'

function App() {
  return (
    <div className="App">
      <Prg_header />
      <Prg_main />
      <PrgStudentSection/>
    </div>
  )
}

export default App
