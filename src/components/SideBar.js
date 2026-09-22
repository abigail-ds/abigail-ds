import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import HorizontalRule from "./HorizontalRule"

import "./SideBar.css"

const SideBar = props => {
  const intl = useIntl()
  const spanish = intl.locale === "es"
  const data = useStaticQuery(graphql`
    query {
      phone: markdownRemark(fileAbsolutePath: { regex: "/footer/" }) {
        frontmatter {
          en_phone
          es_phone
        }
      }
    }
  `)
  return (
    <div id="stage" className="section">
      <div style={{ marginBottom: "20px" }}>
        <h3>{props.title}</h3>
        <p>{props.message}</p>
        <Link to="/online-training" className="btn hero-btn">
          {spanish ? "VER CURSOS EN LÍNEA" : "VIEW ONLINE COURSES"}
        </Link>
      </div>
      <HorizontalRule altColor={"horizontal-line"} />
      <h6 style={{ fontWeight: "600", paddingTop: "20px" }}>{props.caption}</h6>
      <p>
        <span style={{ fontWeight: "600" }}>English: </span>
        <a href={`tel:${data.phone.frontmatter.en_phone}`}>
          {data.phone.frontmatter.en_phone}
        </a>
      </p>
      <p>
        <span style={{ fontWeight: "600" }}>Español: </span>
        <a href={`tel:${data.phone.frontmatter.es_phone}`}>
          {data.phone.frontmatter.es_phone}
        </a>
      </p>
    </div>
  )
}

export default SideBar
