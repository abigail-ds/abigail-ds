import React from "react"
import { injectIntl, useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import CardRender from "../components/CardRender"
import { useStaticQuery, graphql } from "gatsby"

const Registration = ({ intl }) => {
  const seo =
    intl.locale === "es"
      ? {
          title: "Inscripción de la escuela de manejo",
          description:
            "Comuníquese con Abigail's Driving School para confirmar el programa correcto y los próximos pasos de inscripción.",
        }
      : {
          title: "Driving School Registration",
          description:
            "Contact Abigail's Driving School to confirm the correct Virginia driving program and registration steps.",
        }
  const data = useStaticQuery(graphql`
    query {
      products: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/products/" } }
      ) {
        nodes {
          fileAbsolutePath
          frontmatter {
            string
            price
            number
          }
        }
      }
      form: markdownRemark(fileAbsolutePath: { regex: "/form/" }) {
        html
      }
      formEs: markdownRemark(fileAbsolutePath: { regex: "/fTranslate/" }) {
        html
      }
    }
  `)
  const path = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <Layout>
      <CardRender
        pagetitle={intl.formatMessage({ id: "registration.pagetitle" })}
        message={intl.formatMessage({ id: "registration.message" })}
      />
      <SEO
        lang={intl.locale}
        title={seo.title}
        description={seo.description}
      />

      <Form googleForm={data.formEs.html} />
    </Layout>
  )
}

export default injectIntl(Registration)
