

import '../style/studentInfo.css'
import PrgStudentSection from './PrgStudentSection'
import data from '../data'


const StudentInfo = (props) => {
    function getItem (e) {
        console.log(e.name) 
        return <PrgStudentSection key={e.id} name ={e.name} familyName = {e.familyName} completed ={e.completed}/>
    }
    return (
        <div className="studentInfo" id = {!props.open ? 'scaleStudenInfo' : null}>
            {data.map(getItem)}
        </div>
    )
}

export default StudentInfo
