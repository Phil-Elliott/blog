import React, { useState } from "react"
import "./Header.scss"
import { HeaderName, HeaderNav, HeaderRight, HamburgerIcon } from "./index"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header-container">
      <div className="header-content-container">
        <div className="header-top-content-container">
          <div className="hamburger-icon">
            <HamburgerIcon setIsOpen={setIsOpen} isOpen={isOpen} />
          </div>
          <HeaderName />
          <div className="header-fullSize-nav">
            <HeaderNav />
          </div>
          <HeaderRight />
        </div>
      </div>
      <div
        className={`header-bottom-content-container ${
          isOpen
            ? "header-bottom-content-container-open"
            : "header-bottom-content-container-closed"
        }`}
      >
        <div className="header-responsive-links-container">
          <HeaderNav />
        </div>
      </div>
    </header>
  )
}

export default Header
