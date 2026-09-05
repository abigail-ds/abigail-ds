import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"

const DriversManual = ({ intl }) => {
  const seo =
    intl.locale === "es"
      ? {
          title: "Curso del Manual del Conductor 3X Fail de Virginia",
          description:
            "Curso en línea de 8 horas para estudiantes elegibles que reprobaron tres veces el examen de conocimientos del DMV de Virginia.",
        }
      : {
          title: "Virginia 3X Fail Driver's Manual Course",
          description:
            "Eight-hour online course for eligible students who failed the Virginia DMV knowledge exam three times.",
        }
  const data = useStaticQuery(graphql`
    query {
      driversManual: markdownRemark(
        fileAbsolutePath: { regex: "/virginia-drivers-manual/" }
      ) {
        frontmatter {
          title
          string
        }
        id
        html
      }
      driversManualEs: markdownRemark(
        fileAbsolutePath: { regex: "/curso-manual-de-conductores/" }
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
