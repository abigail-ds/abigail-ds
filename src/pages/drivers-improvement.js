import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"

const DriversImprovement = ({ intl }) => {
  const seo =
    intl.locale === "es"
      ? {
          title: "Curso de mejora del conductor de Virginia de 8 horas",
          description:
            "Curso en línea de mejora del conductor de Virginia de 8 horas para estudiantes elegibles por DMV, tribunal, seguro o asistencia voluntaria.",
        }
      : {
          title: "Virginia 8-Hour Driver Improvement Clinic",
          description:
            "Virginia online 8-hour Driver Improvement Clinic for eligible DMV, court, insurance, and voluntary attendance.",
        }
  const data = useStaticQuery(graphql`
    query {
      driversImp: markdownRemark(
        fileAbsolutePath: { regex: "/drivers-improvement/" }
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
        title={seo.title}
        description={seo.description}
      />
      <CardRender
        pagetitle={intl.formatMessage({ id: "drivers_improvement.pagetitle" })}
        message={intl.formatMessage({ id: "drivers_improvement.message" })}
      />
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

export default injectIntl(DriversImprovement)
