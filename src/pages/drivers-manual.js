import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"

const DriversManual = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      driversManual: markdownRemark(
        fileAbsolutePath: { regex: "/drivers-manual/" }
      ) {
        frontmatter {
          title
          string
        }
        id
        html
      }
      driversManualEs: markdownRemark(
        fileAbsolutePath: { regex: "/mejora-de-conductores/" }
      ) {
        frontmatter {
          title
          string
        }
        id
        html
      }
    }
  `)
  const path = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "drivers_manual.title" })}
      />
      <CardRender
        pagetitle={intl.formatMessage({ id: "drivers_manual.pagetitle" })}
      />

      {/* NEED TO UPDATE QUERY */}
      <CourseInfo
        style={{ marginBottom: "50px" }}
        message={
          path.match("/en/")
            ? data.driversManual.html
            : data.driversManualEs.html
        }
        path={path}
        title={
          path.match("/en/")
            ? data.driversManual.frontmatter.string
            : data.driversManualEs.frontmatter.string
        }
      />
    </Layout>
  )
}

export default injectIntl(DriversManual)
