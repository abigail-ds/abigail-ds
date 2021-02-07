import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"

const DriversManual = ({ intl }) => {
  // NEEDS NEW QUERY
  const data = useStaticQuery(graphql`
    query {
      driversImp: markdownRemark(
        fileAbsolutePath: { regex: "/drivers-manual/" }
      ) {
        frontmatter {
          title
          string
        }
        id
        html
      }
      driversImpEs: markdownRemark(
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
        title={intl.formatMessage({ id: "drivers_improvement.title" })}
      />
      <CardRender
        pagetitle={intl.formatMessage({ id: "drivers_improvement.pagetitle" })}
        message={intl.formatMessage({ id: "drivers_improvement.message" })}
      />

      {/* NEED TO UPDATE QUERY */}
      <CourseInfo
        style={{ marginBottom: "50px" }}
        message={
          path.match("/en/") ? data.driversImp.html : data.driversImpEs.html
        }
        path={path}
        title={
          path.match("/en/")
            ? data.driversImp.frontmatter.string
            : data.driversImpEs.frontmatter.string
        }
      />
    </Layout>
  )
}

export default injectIntl(DriversManual)
