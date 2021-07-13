import React from "react"
import "../style/prg_header.css"

export default function PrgHeader() {
  return (
    <div className="prg-header">
      <div className="header-container">
        <div className="prg-header-logo">
          <img src="prg_icon_star.png" alt="" />
        </div>
        <div className="prg-header-flags">
          <img src="Nz_Flag.png" alt="" />
          <img src="Maori_Flag.png" alt="" />
        </div>
      </div>
    </div>
  )
}
