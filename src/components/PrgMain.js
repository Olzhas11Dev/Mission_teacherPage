import React from "react"
import "../style/prg_main.css"

export default function PrgMain(props) {
  return (
    <div className="prg-main">
      <div className="main-container">
        <div className="main-leftBar" id ={!props.open ? 'scaleLeftBar' : null}>
          <div className="main-avatar" id ={!props.open ? 'scaleAvatar' : null}>
            <img src="Ellipse 39@2x.png" alt="" />
          </div>
          <div onClick={()=>props.getSection(1)} className="left-lines">
              <img src="icon_progress.png" alt="" id ={!props.open ? 'scaleIcon' : null}/>
              {props.open ? 
              <div>PROGRESS TRACKER</div>:null
              }
          </div>
          <div onClick={()=>props.getSection(2)} className="left-lines">
            <img src="icon_graduate.png" alt="" id ={!props.open ? 'scaleIcon' : null}/>
            {props.open ? 
            <div >STUDENT PROFILE</div>:null
            }
          </div>
          <div className="left-lines">
            <img src="icon_help.png" alt="" id ={!props.open ? 'scaleIcon' : null}/>
            {props.open ?
            <div>HELP REQUEST</div>:null
            }
          </div>
          <div className="left-lines">
            <img src="icon_steps.png" alt="" id ={!props.open ? 'scaleIcon' : null}/>
            {props.open ?
            <div>PROJECT SUBMISSIONS</div>:null
            }
          </div>
          <div className="left-lines">
            <img src="icon_library.png" alt="" id ={!props.open ? 'scaleIcon' : null}/> 
            {props.open ? 
            <div>PROJECT LIBRARY</div>:null
            }
          </div>
        </div>
        <div className="arrowSection" onClick={()=>props.setOpen(!props.open)} id ={!props.open ? 'scaleArrow' : null}>
          <img src="icon_left.png" alt=""/>
        </div>
        <div className="left_bottom-section" id={!props.open ? 'scaleLeftBottom' :null} >
          <div className="left-bottom-card">
              <img src="icon_user.png" alt=""/>
              {props.open ? 
              <div>Profile</div>:null
            }
          </div>
          <div className="left-bottom-card">
              <img src="icon_settings.png" alt=""/>
              {props.open ? 
              <div>Settings</div>:null
            }
          </div>
          <div className="left-bottom-card">
              <img src="icon_sign_out.png" alt=""/>
              {props.open ? 
              <div>Log out</div>:null
              }
          </div>
          
        </div>
        <div className="main-rightBar" id={!props.open ? 'scaleRightBar' :null}>
          <div className="right-container">
          <div className="btn-right-section" id={!props.open ? 'scaleBtnRightSection' :null}>
            <button className="btn-take">Take Screenshot</button>
            <button className="btn-center">Help Center</button>
            <button className="btn-more">More Projects</button>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
