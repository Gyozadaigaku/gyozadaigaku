import React from "react"
import dumplingLogo from "../assets/dumpling-logo.svg"
import soupDumplingLogo from "../assets/soup-dumpling-logo.svg"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav--center">
        <div className="nav--header">
          <img src={soupDumplingLogo} alt="soup dumpling logo" />
          <button type="button" className="toggle-btn">
            <img src={dumplingLogo} alt="dumpling logo" />
          </button>
        </div>
        <PageLinks styleClass="nav--links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
