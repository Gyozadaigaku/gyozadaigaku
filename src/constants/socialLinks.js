import React from "react"
import { FaInstagram, FaGithub, FaQuora } from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaInstagram className="social-icon"></FaInstagram>,
    url: "https://www.instagram.com/gyozadaigaku",
  },
  {
    id: 2,
    icon: <FaGithub className="social-icon"></FaGithub>,
    url: "https://github.com/Gyozadaigaku",
  },
  {
    id: 3,
    icon: <FaQuora className="social-icon"></FaQuora>,
    url: "https://jp.quora.com/profile/Jun-Inoue-1",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
