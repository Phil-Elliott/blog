import React, { useState } from "react"
import "./Hamburger-Icon.scss"

const HamburgerIcon = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: any
  isOpen: boolean
}) => {
  return (
    <div>
      <button
        name="responsive header toggle"
        type="button"
        className={`toggle-button ${isOpen ? "toggle-button-open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </button>
    </div>
  )
}

export default HamburgerIcon

/*
    click and changes to x
      - middle span dissapears 


*/
