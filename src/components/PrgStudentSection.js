import React from 'react'
import '../style/prg_student_section.css'
import { useState } from 'react'

const PrgStudentSection = (props) => {
   let done = 0;
   let circles = props.tasks.map(function(e){
       if(e.completed){
            done++
       }
        return (
            <div className="student_circle" style={{background: e.completed ? '#98ECCC': 'white',color :e.completed ? 'black': 'grey'}}>{e.id}</div>
        )
    })

    return (
    <div className="student_section">
        <div className="student_info_card">
            <div className="info_card_left">
                <div className="student_name">
                    {props.name} {props.familyName}
                </div>
                <div className="student_rate"> <span>{done}/15</span> Project Completed</div>
            </div>
            <div className="info_card_right">
                {circles}
            </div>
        </div>
    </div>
    )
}

export default PrgStudentSection
