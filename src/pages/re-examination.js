import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/PopularCourses.css"

export default function ReExaminationPage() {
  const intl = useIntl()
  const es = intl.locale === "es"
  const title = es ? "Curso del Manual del Conductor: 3X Fail" : "3X Fail Driver’s Manual Course"
  const options = es ? [
    ["Clase privada con Zuhra", "$175", "Inglés o español", "Lunes a viernes, 9 a. m.–5 p. m.", "Solicitar clase con Zuhra", "Zuhra"],
    ["Clase privada con Ileana", "$200", "Español", "Sábado o domingo, desde las 10 a. m.", "Solicitar clase con Ileana", "Ileana"],
    ["Curso en línea", "$149", "Estudie en línea", "Revise el idioma disponible y los requisitos en el portal antes de pagar.", "Inscribirse en línea", "online"],
  ] : [
    ["Private class with Zuhra", "$175", "English or Spanish", "Monday–Friday, 9 a.m.–5 p.m.", "Request a class with Zuhra", "Zuhra"],
    ["Private class with Ileana", "$200", "Spanish", "Saturday or Sunday, starting at 10 a.m.", "Request a class with Ileana", "Ileana"],
    ["Online course", "$149", "Learn online", "Check available language and enrollment requirements in the course portal before paying.", "Enroll online", "online"],
  ]
  const bookingLinks = {
    Zuhra: "https://abigailsdrivingschoolonline.setmore.com/services/16ca08e8-654e-48d2-8d00-71baa3d5bb15",
    Ileana: "https://abigailsdrivingschoolonline.setmore.com/services/bbe15b9f-3d47-4689-ad85-29f7b2d0fce1",
  }
  return <Layout>
    <SEO lang={intl.locale} title={title} description={es ? "Compare clases privadas del Manual del Conductor en Richmond: $175 con Zuhra, $200 con Ileana, o curso en línea de $149." : "Compare private Driver’s Manual classes in Richmond: $175 with Zuhra, $200 with Ileana, or the $149 online course."} />
    <section className="popular-courses" aria-labelledby="re-examination-title">
      <p className="popular-courses-kicker">{es ? "REEXAMEN · RICHMOND, VA" : "RE-EXAMINATION · RICHMOND, VA"}</p>
      <h1 id="re-examination-title">{title}</h1>
      <p className="popular-courses-intro">{es ? "¿Reprobó el examen de conocimientos del DMV de Virginia tres veces? Compare estas opciones del curso de 8 horas del Manual del Conductor y elija la que se adapte a su horario." : "Failed the Virginia DMV knowledge exam three times? Compare these eight-hour Driver’s Manual course options and choose what fits your schedule."}</p>
      <div className="popular-courses-grid">
        {options.map(([name, price, language, schedule, action, instructor]) => <article className="popular-course-card" key={instructor}>
          <p className="popular-course-price">{price}</p>
          <h2 style={{ fontSize: "1.5rem" }}>{name}</h2>
          <p><strong>{language}</strong><br />{schedule}</p>
          <a className="popular-course-enroll" href={instructor === "online" ? "https://online.abigailsdrivingschool.com/shop/3x-fail/" : bookingLinks[instructor]}>{instructor === "online" ? action : es ? `Reservar con ${instructor}` : `Book with ${instructor}`}</a>
        </article>)}
      </div>
      <h2 style={{ marginTop: "40px" }}>{es ? "Clases privadas por cita" : "Private classes by appointment"}</h2>
      <p className="popular-courses-intro">{es ? "Ambas instructoras enseñan en 6802 Paragon Pl, Suite 410, Richmond, VA 23230. Elija su instructora y reserve una fecha disponible en Setmore. Comuníquese con nosotros si necesita ayuda con los requisitos o el pago." : "Both instructors teach at 6802 Paragon Pl, Suite 410, Richmond, VA 23230. Choose your instructor and book an available date in Setmore. Contact us if you need help with eligibility or payment."}</p>
      <p className="popular-courses-intro">{es ? "¿Menor de 18 años? Comuníquese con nosotros antes de inscribirse para revisar su comprobante de educación vial teórica. El curso debe completarse después del tercer intento fallido. Este curso es para el examen de conocimientos." : "Under 18? Contact us before enrolling so we can review your classroom driver-education completion. The course must be completed after your third failed attempt. This course is for the knowledge exam."} <a href="https://www.dmv.virginia.gov/licenses-ids/training/three-exam-failures">{es ? "Ver requisitos del DMV" : "See DMV requirements"}</a></p>
      <div className="popular-courses-footer">
        <a href="tel:+18048237730">{es ? "Inglés" : "English"}: 804-823-7730</a>
        <a href="tel:+17036378250">{es ? "Español" : "Spanish"}: 703-637-8250</a>
      </div>
    </section>
  </Layout>
}
