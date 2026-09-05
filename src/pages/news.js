import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"

const News = ({ intl }) => {
  const seo =
    intl.locale === "es"
      ? {
          title: "Noticias de educación vial en Virginia",
          description:
            "Noticias y avisos de Abigail's Driving School sobre cursos, inscripciones y educación vial en Virginia.",
        }
      : {
          title: "Virginia Driver Education News",
          description:
            "News and announcements from Abigail's Driving School about Virginia driving courses, registration, and driver education.",
        }
  const data = useStaticQuery(graphql`
    query {
      news: markdownRemark(fileAbsolutePath: { regex: "/news/" }) {
        frontmatter {
          title
        }
        id
        html
      }
      newsEs: markdownRemark(fileAbsolutePath: { regex: "/noticias/" }) {
        frontmatter {
          title
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
      <Paragraph
        title={intl.formatMessage({ id: "news.title" })}
        message={path.match("/en/") ? data.news.html : data.newsEs.html}
      />
    </Layout>
  )
}

export default injectIntl(News)
