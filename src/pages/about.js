import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"

const About = ({ intl }) => {
  const seo =
    intl.locale === "es"
      ? {
          title: "Acerca de nuestra escuela de manejo en Richmond",
          description:
            "Conozca Abigail's Driving School, una escuela con licencia del DMV que atiende a estudiantes en inglés y español desde 2012.",
        }
      : {
          title: "About Our Richmond Driving School",
          description:
            "Learn about Abigail's Driving School, a Virginia DMV-licensed Richmond school serving English- and Spanish-speaking students since 2012.",
        }
  const data = useStaticQuery(graphql`
    query {
      about: markdownRemark(fileAbsolutePath: { regex: "/about/" }) {
        frontmatter {
          title
        }
        id
        html
      }
      aboutEs: markdownRemark(fileAbsolutePath: { regex: "/acerca-de/" }) {
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
        title={intl.formatMessage({ id: "about.pagetitle" })}
        message={path.match("/en/") ? data.about.html : data.aboutEs.html}
      />
    </Layout>
  )
}

export default injectIntl(About)
