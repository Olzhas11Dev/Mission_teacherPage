

import '../style/studentInfo.css'
import PrgStudentSection from './PrgStudentSection'
import data from '../data'


const StudentInfo = () => {
    function getItem (e) {
        console.log(e.name) 
        return <PrgStudentSection key={e.id} name ={e.name} familyName = {e.familyName} completed ={e.completed}/>
    }
    return (
        <div className="studentInfo">
            <div className="scrollbar"></div>
            {data.map(getItem)}
        </div>
    )
}

export default StudentInfo
