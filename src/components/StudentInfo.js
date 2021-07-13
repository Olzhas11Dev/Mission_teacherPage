

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
    
    console.log(dataDB)
    return (
        <div className="studentInfo" id = {!props.open ? 'scaleStudenInfo' : null}>
          {/* <div>
              {dataDB.map(function(e,index){
                return (
                    <PrgStudentSection key={index} name ={e.firstName} familyName = {e.familyName} tasks={e.tasks}/>
                )
            })}
            </div> */}

            <div className="PhotoRow">
                {dataDB.map(function(e){
                    return (
                        <PrgPhotoSection name={e.firstName} familyName = {e.familyName}/>
                    )
                })}
               
            </div>
           
        </div>
    )
}

export default StudentInfo
