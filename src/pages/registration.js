import React from "react"
import { injectIntl, useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from "../components/form"
import CardRender from "../components/CardRender"
import { useStaticQuery } from "gatsby"

const Registration = ({ intl }) => {
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
        title={intl.formatMessage({ id: "registration.title" })}
      />

      <Form
        agreement={data.form.html}
        courseTitle={intl.formatMessage({ id: "registration.course_title" })}
        courseInfoTitle={intl.formatMessage({
          id: "registration.student_info_title",
        })}
        coursePaymentOptionTitle={intl.formatMessage({
          id: "registration.payment_option_title",
        })}
        termsTitle={intl.formatMessage({ id: "registration.terms_title" })}
        registrationSubmit={intl.formatMessage({
          id: "registration.registration_submit",
        })}
        eraserSubmit={intl.formatMessage({ id: "registration.eraser_submit" })}
        productOne={[
          data.products.nodes[0].frontmatter.string,
          data.products.nodes[0].frontmatter.price,
          data.products.nodes[0].frontmatter.number,
        ]}
        productTwo={[
          data.products.nodes[1].frontmatter.string,
          data.products.nodes[1].frontmatter.price,
          data.products.nodes[1].frontmatter.number,
        ]}
        productThree={[
          data.products.nodes[2].frontmatter.string,
          data.products.nodes[2].frontmatter.price,
          data.products.nodes[2].frontmatter.number,
        ]}
        productFour={[
          data.products.nodes[3].frontmatter.string,
          data.products.nodes[3].frontmatter.price,
          data.products.nodes[3].frontmatter.number,
        ]}
        productFive={[
          data.products.nodes[4].frontmatter.string,
          data.products.nodes[4].frontmatter.price,
          data.products.nodes[4].frontmatter.number,
        ]}
      />
    </Layout>
  )
}

export default injectIntl(Registration)
