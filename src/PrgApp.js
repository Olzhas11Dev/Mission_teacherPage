import "./prgApp.css"
import Prg_header from "./components/Prg_header"
import Prg_main from "./components/Prg_main"
import StudentInfo from './components/StudentInfo'

function App() {
  return (
    <div className="App">
      <Prg_header />
      <Prg_main />
      <StudentInfo/>
    </div>
  )
}

export default App
