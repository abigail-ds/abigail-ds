import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardRender from "../components/CardRender"
import CourseInfo from "../components/CourseInfo"
import Accordion from "../components/Accordion"

const Services = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      courses: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/courses/" } }
      ) {
        nodes {
          fileAbsolutePath
          html
          frontmatter {
            title
          }
        }
      }
      coursesEs: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/cursos/" } }
      ) {
        nodes {
          fileAbsolutePath
          html
          frontmatter {
            title_es
          }
        }
      }
    }
  `)
  const path = typeof window !== "undefined" ? window.location.pathname : ""

  let enArr = data.courses.nodes
  let esArr = data.coursesEs.nodes
  let services

  if (path.match("/en/")) {
    services = enArr.map((ele, index) => {
      return (
        <div label={ele.frontmatter.title}>
          <CourseInfo message={ele.html} />
        </div>
      )
    })
  } else {
    services = esArr.map((ele, index) => {
      return (
        <div label={ele.frontmatter.title_es}>
          <CourseInfo message={ele.html} />
        </div>
      )
    })
  }

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={intl.formatMessage({ id: "services.title" })}
      />
      <CardRender
        pagetitle={intl.formatMessage({ id: "services.pagetitle" })}
        message={intl.formatMessage({ id: "services.message" })}
      />
      <Accordion>{services}</Accordion>
    </Layout>
  )
}

export default injectIntl(Services)
