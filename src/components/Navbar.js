import React from "react"
import dumplingLogo from "../assets/dumpling-logo.svg"
import soupDumplingLogo from "../assets/soup-dumpling-logo.svg"
import PageLinks from "../constants/links"
const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="nav">
      <div className="nav--center">
        <div className="nav--header">
          <a href="./">
            <img src={soupDumplingLogo} alt="soup dumpling logo" />
          </a>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <img src={dumplingLogo} alt="dumpling logo" />
          </button>
        </div>
        <PageLinks styleClass="nav--links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
