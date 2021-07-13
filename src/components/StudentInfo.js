

import '../style/studentInfo.css'
import { useState,useEffect } from 'react'
import PrgStudentSection from './PrgStudentSection'
import PrgPhotoSection from './PrgPhotoSection'
import axios from 'axios'


const StudentInfo = (props) => {
    const[dataDB,setDataDB] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/').then(response=>{
            setDataDB(response.data)
        })
    },[])
    
    const block1 = 
        <div>
            {dataDB.map(function(e,index){
            return (
                <PrgStudentSection key={index} name ={e.firstName} familyName = {e.familyName} tasks={e.tasks}/>
            )
            })}
        </div> 

    const block2 = 
        <div className="PhotoRow">
            {dataDB.map(function(e,index){
                return (
                    <PrgPhotoSection key = {index} name={e.firstName} familyName = {e.familyName}/>
                )
            })}
        </div>
    console.log(props.section)
    return (

        <div className="studentInfo" id = {!props.open ? 'scaleStudenInfo' : null}>
               {props.section === 1 ? block1 : block2}
        </div>
    )
}

export default StudentInfo
