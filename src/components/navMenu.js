import { Link, useIntl } from "gatsby-plugin-intl"
import React from "react"

import "./navMenu.css"

const NavMenu = props => {
  const spanish = useIntl().locale === "es"
  return (
  <div className="nav-menu">
    <Link to="/">{props.home}</Link>
    <Link to="/about">{props.about}</Link>
    <Link to="/faq">{props.faq}</Link>
    <Link to="/online-training">{props.training}</Link>
    <Link to="/behind-the-wheel">{spanish ? "MANEJO PRÁCTICO" : "BEHIND THE WHEEL"}</Link>
    <Link className="btn" to="/news">
      News
    </Link>
  </div>
)
}

export default NavMenu
