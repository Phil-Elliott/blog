import React from "react"
import "./Header-Nav.scss"
import { NavLink } from "react-router-dom"

const NavLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Articles",
    path: "/articles",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
]

const HeaderNav = () => {
  return (
    <nav className="header-nav-container">
      <ul>
        {NavLinks.map((link) => {
          return (
            <li key={link.name}>
              <NavLink className="header-nav-link" to={link.path}>
                {link.name}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default HeaderNav
