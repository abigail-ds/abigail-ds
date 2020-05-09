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
      <Accordion>
        <div
          label={
            path.match("/en/")
              ? data.courses.nodes[0].frontmatter.title
              : data.coursesEs.nodes[0].frontmatter.title_es
          }
        >
          <CourseInfo
            message={
              path.match("/en/")
                ? data.courses.nodes[0].html
                : data.coursesEs.nodes[0].html
            }
          />
        </div>
        <div
          label={
            path.match("/en/")
              ? data.courses.nodes[1].frontmatter.title
              : data.coursesEs.nodes[1].frontmatter.title_es
          }
        >
          <CourseInfo
            message={
              path.match("/en/")
                ? data.courses.nodes[1].html
                : data.coursesEs.nodes[1].html
            }
          />
        </div>
        <div
          label={
            path.match("/en/")
              ? data.courses.nodes[2].frontmatter.title
              : data.coursesEs.nodes[2].frontmatter.title_es
          }
        >
          <CourseInfo
            message={
              path.match("/en/")
                ? data.courses.nodes[2].html
                : data.coursesEs.nodes[2].html
            }
          />
        </div>
        <div
          label={
            path.match("/en/")
              ? data.courses.nodes[3].frontmatter.title
              : data.coursesEs.nodes[3].frontmatter.title_es
          }
        >
          <CourseInfo
            message={
              path.match("/en/")
                ? data.courses.nodes[3].html
                : data.coursesEs.nodes[3].html
            }
          />
        </div>
      </Accordion>
    </Layout>
  )
}

export default injectIntl(Services)
