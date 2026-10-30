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
          title: "Curso de Mejora del Conductor en Richmond, VA | Clínica de 8 horas",
          description:
            "Clínica en línea de mejora del conductor de 8 horas en Richmond, VA para requisitos del DMV, la corte, el seguro o asistencia voluntaria. Con licencia del DMV; la finalización se reporta en 24 horas.",
        }
      : {
          title: "Driver Improvement Clinic in Richmond, VA — 8-Hour Course",
          description:
            "Online 8-hour Driver Improvement Clinic in Richmond, VA for DMV, court, insurance, and voluntary attendance. DMV-licensed; completion reported to the DMV within 24 hours.",
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
        enrollUrl="https://online.abigailsdrivingschool.com/enroll/va-driver-improvement"
        enrollLabel={intl.formatMessage({ id: "button.enroll" })}
      />
    </Layout>
  )
}

export default injectIntl(DriversImprovement)
