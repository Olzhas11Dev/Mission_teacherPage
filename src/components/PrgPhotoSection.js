import React from 'react'
import '../style/prg_photo_section.css'


function PrgPhotoSection(props) {
    return (
        <div className="photoInfo">
            <div className ="photoOne">
                <div className="photoAva">
                    <img className='photAva' src="./assets/mon1.png" alt=""/>
                    
                </div>
                    <div className="photoNames">
                        <div>{props.name} {props.familyName}</div>
                    </div>      
                    
           </div>
        </div>
    )
}

export default PrgPhotoSection
