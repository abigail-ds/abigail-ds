import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import "materialize-css/dist/css/materialize.min.css"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import SideBar from "../components/SideBar"
import Paragraph from "../components/paragraphSection"
import SimpleSlider from "../components/SimpleSlider"
import LocalIntro from "../components/LocalIntro"

const IndexPage = () => {
  const intl = useIntl()
  const seo =
    intl.locale === "es"
      ? {
          title: "Escuela de manejo en Richmond, Virginia",
          description:
            "Escuela de manejo con licencia del DMV de Virginia. Programas en línea de mejora del conductor, Manual 3X Fail, RADEP y educación vial.",
        }
      : {
          title: "Driving School in Richmond, Virginia",
          description:
            "Virginia DMV-licensed driving school in Richmond offering online Driver Improvement, 3X Fail Driver's Manual, RADEP, and driver education programs.",
        }
  const data = useStaticQuery(graphql`
    query {
      home: markdownRemark(fileAbsolutePath: { regex: "/home/" }) {
        frontmatter {
          title
        }
        id
        html
      }
      homeEs: markdownRemark(fileAbsolutePath: { regex: "/hogar/" }) {
        frontmatter {
          title_es
        }
        id
        html
      }
      accreditedLogo: file(relativePath: { eq: "accredited-biz-logo.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const path = typeof window !== "undefined" ? window.location.pathname : ""
  return (
    <Layout>
      <Hero
        herotitle={intl.formatMessage({ id: "home.herotitle" })}
        enrollLabel={intl.locale === "es" ? "VER CURSOS" : "VIEW COURSES"}
        callLabel={intl.locale === "es" ? "LLAMAR AHORA" : "CALL NOW"}
        phone={intl.locale === "es" ? "+17036378250" : "+18048237730"}
      />
      <SEO lang={intl.locale} title={seo.title} description={seo.description} />
      <div className="brand-section">
        <div className="row side" style={{ display: "flex" }}>
          <div class="col s12 m12 l5">
            <Paragraph
              title={intl.formatMessage({ id: "home.pagetitle" })}
              message={path.match("/es/") ? data.homeEs.html : data.home.html}
            />
            <Image
              alt="Accreditation emblem for Abigail's Driving School"
              visual={data.accreditedLogo.childImageSharp.fixed}
            />
            <SimpleSlider
              title={intl.formatMessage({
                id: "home.testimonials.testimonial_title",
              })}
            />
          </div>
          <div className="col l5 m12 s12">
            <div className="cta-sidebar">
              <SideBar
                title={intl.formatMessage({
                  id: "home.sidebar.title",
                })}
                message={intl.formatMessage({
                  id: "home.sidebar.message",
                })}
                caption={intl.formatMessage({
                  id: "home.sidebar.caption",
                })}
              />
            </div>
          </div>
        </div>
      </div>
      <LocalIntro />
    </Layout>
  )
}

export default IndexPage
