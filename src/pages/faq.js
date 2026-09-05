import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/faq.css"

const copy = {
  en: {
    eyebrow: "Student support",
    description:
      "Answers about Virginia Driver Improvement, 3X Fail, RADEP, driver education, pricing, certificates, and registration.",
    navigation: "FAQ topics",
    topics: [
      "Choosing a Course",
      "Registration & Payment",
      "Completion & Certificates",
      "Support & Location",
    ],
    help: "Still unsure which course to choose?",
    helpText:
      "Tell us what you need to complete. We can help you check the course, format, and next steps before you register.",
    programs: "View Online Programs",
    hours: "Phone and text customer service hours",
  },
  es: {
    eyebrow: "Ayuda para estudiantes",
    description:
      "Respuestas sobre mejora del conductor, 3X Fail, RADEP, educación vial, precios, certificados e inscripción en Virginia.",
    navigation: "Temas de preguntas frecuentes",
    topics: [
      "Elegir un curso",
      "Inscripción y pago",
      "Finalización y certificados",
      "Ayuda y ubicación",
    ],
    help: "¿Todavía no sabe qué curso elegir?",
    helpText:
      "Cuéntenos qué necesita completar. Le ayudamos a revisar el curso, la modalidad y los pasos antes de inscribirse.",
    programs: "Ver programas en línea",
    hours: "Horario de atención por teléfono y mensaje de texto",
  },
}
const topicIds = ["choosing", "registration", "completion", "support"]

const Faq = ({ intl }) => {
  const data = useStaticQuery(graphql`
    query {
      faq: markdownRemark(fileAbsolutePath: { regex: "/faq/" }) {
        frontmatter {
          title
        }
        html
      }
      faqEs: markdownRemark(
        fileAbsolutePath: { regex: "/preguntas-frecuentes/" }
      ) {
        frontmatter {
          title
        }
        html
      }
      faqContact: markdownRemark(fileAbsolutePath: { regex: "/footer/" }) {
        frontmatter {
          en_phone
          es_phone
          contact_hours
        }
      }
    }
  `)
  const isSpanish = intl.locale === "es"
  const content = isSpanish ? data.faqEs : data.faq
  const labels = isSpanish ? copy.es : copy.en
  const contact = data.faqContact.frontmatter

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={content.frontmatter.title}
        description={labels.description}
      />
      <article className="faq-page" aria-labelledby="faq-title">
        <header className="faq-heading">
          <p className="faq-eyebrow">{labels.eyebrow}</p>
          <h1 id="faq-title">{content.frontmatter.title}</h1>
          <p className="faq-intro">{labels.description}</p>
        </header>
        <nav className="faq-jump-nav" aria-label={labels.navigation}>
          {topicIds.map((id, index) => (
            <a href={`#${id}`} key={id}>
              {labels.topics[index]}
            </a>
          ))}
        </nav>
        <div
          className="faq-content"
          dangerouslySetInnerHTML={{ __html: content.html }}
        />
        <aside
          className="faq-help"
          id="faq-help"
          aria-labelledby="faq-help-title"
        >
          <h2 id="faq-help-title">{labels.help}</h2>
          <p>{labels.helpText}</p>
          <a
            className="faq-cta"
            href="https://online.abigailsdrivingschool.com/"
          >
            {labels.programs}
          </a>
          <div className="faq-contact-links">
            <a href={`tel:${contact.en_phone}`}>English: {contact.en_phone}</a>
            <a href={`tel:${contact.es_phone}`}>Español: {contact.es_phone}</a>
            <a href="mailto:abigailsInstructor@gmail.com">
              abigailsInstructor@gmail.com
            </a>
          </div>
          {contact.contact_hours && (
            <p className="faq-contact-hours">
              {labels.hours}: {contact.contact_hours}
            </p>
          )}
        </aside>
      </article>
    </Layout>
  )
}

export default injectIntl(Faq)
