import React from "react"
import "../style/prg_main.css"

export default function Prg_main() {
  return (
    <div className="prg-main">
      <div className="main-container">
        <div className="main-leftBar">
          <div className="main-avatar">
            <img src="Ellipse 39@2x.png" alt="" />
          </div>
          <div className="left-lines">
            <div className="putRight"></div>
            <img src="icon_steps.png" alt="" />
            <div>PROGRESS TRACKER</div>
          </div>
          <div className="left-lines">
            <img src="icon_steps.png" alt="" />
            <div>STUDENT PROFILE</div>
          </div>
          <div className="left-lines">
            <img src="icon_steps.png" alt="" />
            <div>HELP REQUEST</div>
          </div>
          <div className="left-lines">
            <img src="icon_steps.png" alt="" />
            <div>PROJECT SUBMISSIONS</div>
          </div>
          <div className="left-lines">
            <img src="icon_steps.png" alt="" /> 
            <div>PROJECT LIBRARY</div>
          </div>
        </div>
        <div className="arrowSection">
          <img src="icon_left.png" alt=""/>
        </div>
        <div className="left_bottom-section">
          <div className="left-bottom-card">
              <img src="icon_user.png" alt=""/>
              <div>Profile</div>
          </div>
          <div className="left-bottom-card">
              <img src="icon_settings.png" alt=""/>
              <div>Settings</div>
          </div>
          <div className="left-bottom-card">
              <img src="icon_sign_out.png" alt=""/>
              <div>Log out</div>
          </div>
          
        </div>
        <div className="main-rightBar">
          <div className="right-container">
          <div className="btn-right-section">
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
