import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Paragraph from "../components/paragraphSection"
import CardRender from "../components/CardRender"

const Training = ({ intl }) => {
  const seo =
    intl.locale === "es"
      ? {
          title: "Cursos de manejo en línea de Virginia",
          description:
            "Compare programas en línea de Virginia: mejora del conductor, Manual 3X Fail, RADEP y educación vial de 30 horas.",
        }
      : {
          title: "Virginia Online Driving Courses",
          description:
            "Compare Virginia online Driver Improvement, 3X Fail Driver's Manual, RADEP, and 30-hour driver education programs and tuition.",
        }
  const data = useStaticQuery(graphql`
    query {
      training: markdownRemark(
        fileAbsolutePath: { regex: "/online-training/" }
      ) {
        frontmatter {
          title
        }
        id
        html
      }
      trainingEs: markdownRemark(
        fileAbsolutePath: { regex: "/entrenamiento-en-linea/" }
      ) {
        frontmatter {
          title
        }
        id
        html
      }
    }
  `)
  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={seo.title}
        description={seo.description}
      />
      <CardRender
        pagetitle={intl.formatMessage({ id: "training.pagetitle" })}
        message={intl.formatMessage({ id: "training.message" })}
      />
      <Paragraph
        title={intl.formatMessage({ id: "training.pagetitle" })}
        message={intl.locale === "en" ? data.training.html : data.trainingEs.html}
      />
    </Layout>
  )
}

export default injectIntl(Training)
