import React from "react"
import Helmet from "react-helmet"
import { Link, useIntl } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/richmondLanding.css"

const enrollmentUrl =
  "https://online.abigailsdrivingschool.com/?utm_source=abigailsdrivingschool.com&utm_medium=website&utm_campaign=richmond_driving_school"

const RichmondDrivingSchoolPage = () => {
  const intl = useIntl()
  const spanish = intl.locale === "es"
  const phone = spanish ? "+17036378250" : "+18048237730"
  const displayPhone = spanish ? "703-637-8250" : "804-823-7730"

  const copy = spanish
    ? {
        title: "Escuela de manejo en Richmond, VA",
        description:
          "Escuela de manejo con licencia del DMV que sirve a Richmond, Henrico y Chesterfield. Cursos en línea de mejora, Manual 3X Fail, RADEP y educación vial.",
        kicker: "Cursos de manejo de Virginia en inglés y español",
        heading: "Escuela de manejo en Richmond, Virginia",
        intro:
          "Abigail's Driving School ayuda a conductores de Richmond, Henrico y Chesterfield a completar cursos de Virginia en línea con apoyo bilingüe por teléfono y mensaje de texto.",
        enroll: "Inscribirse en línea",
        call: `Llamar al ${displayPhone}`,
        text: "Enviar mensaje",
        trustTitle: "Ayuda clara para elegir el curso correcto",
        trustText:
          "Elija un programa según los requisitos indicados por el DMV, el tribunal o su compañía de seguros. Si no sabe cuál necesita, comuníquese con nosotros antes de pagar.",
        features: [
          "Escuela con licencia del DMV de Virginia",
          "Cursos en línea a su propio ritmo",
          "Ayuda en inglés y español",
          "Servicio al cliente por teléfono y mensaje de texto de 9 AM a 4 PM",
        ],
        coursesTitle: "Cursos de manejo en línea",
        coursesIntro:
          "Compare el propósito y el precio de cada programa antes de inscribirse.",
        details: "Ver todos los detalles",
        courses: [
          {
            name: "Clínica de mejora del conductor de 8 horas",
            price: "$100",
            description:
              "Para ciertos requisitos del DMV, del tribunal, puntos de manejo seguro o posibles beneficios del seguro.",
          },
          {
            name: "Curso del Manual del Conductor 3X Fail",
            price: "$149",
            description:
              "Curso de ocho horas para estudiantes que reprobaron tres veces el examen de conocimientos de Virginia.",
          },
          {
            name: "Programa RADEP de 12 horas",
            price: "$180",
            description:
              "Combina la clínica de mejora de ocho horas con cuatro horas de educación sobre conducción temeraria o agresiva.",
          },
          {
            name: "Curso RADEP de 4 horas",
            price: "$90",
            description:
              "Para referencias calificadas que ya completaron la clínica requerida de ocho horas.",
          },
          {
            name: "Educación vial en línea de 30 horas",
            price: "$150",
            description:
              "Programa en línea de Virginia con el componente para padres y adolescentes cuando corresponde.",
          },
        ],
        localTitle: "Visítenos en Richmond",
        addressLabel: "Dirección",
        address: "6802 Paragon Pl, Suite 410, Richmond, VA 23230",
        officeHours: "Horario de oficina: martes y viernes, 10 AM–1 PM",
        appointment: "Se requiere cita para visitar la oficina.",
        directions: "Cómo llegar",
        faqTitle: "Preguntas sobre nuestra escuela de Richmond",
        faqs: [
          {
            question:
              "¿Abigail's Driving School tiene licencia del DMV de Virginia?",
            answer:
              "Sí. Abigail's Driving School es una escuela con licencia del DMV de Virginia que ofrece programas para conductores de Virginia.",
          },
          {
            question: "¿Puedo completar mi curso en línea?",
            answer:
              "Sí. Los programas indicados en esta página están disponibles en línea. Revise los requisitos de su documento del DMV, tribunal o seguro antes de elegir un curso.",
          },
          {
            question: "¿Ofrecen ayuda en español?",
            answer:
              "Sí. Puede llamar o enviar un mensaje de texto al 703-637-8250 para recibir ayuda en español.",
          },
          {
            question: "¿Qué áreas atienden?",
            answer:
              "La escuela se encuentra en Richmond y atiende a estudiantes de Richmond, el condado de Henrico y el condado de Chesterfield, además de estudiantes de cursos en línea en Virginia.",
          },
        ],
        finalTitle: "¿Listo para comenzar?",
        finalText:
          "Compare los programas, seleccione el curso que corresponde a su requisito e inscríbase en línea.",
      }
    : {
        title: "Richmond, VA Driving School",
        description:
          "Virginia DMV-licensed driving school serving Richmond, Henrico, and Chesterfield with online Driver Improvement, 3X Fail, RADEP, and driver education courses.",
        kicker: "Virginia driving courses in English and Spanish",
        heading: "Driving School in Richmond, Virginia",
        intro:
          "Abigail's Driving School helps drivers in Richmond, Henrico, and Chesterfield complete Virginia driving courses online, with bilingual help available by phone and text.",
        enroll: "Enroll online",
        call: `Call ${displayPhone}`,
        text: "Send a text",
        trustTitle: "Clear help choosing the right course",
        trustText:
          "Choose a program based on the requirement provided by the DMV, court, or your insurance company. If you are unsure which course you need, contact us before paying.",
        features: [
          "Virginia DMV-licensed driving school",
          "Self-paced online courses",
          "English and Spanish assistance",
          "Phone and text customer service from 9 AM to 4 PM",
        ],
        coursesTitle: "Online driving courses",
        coursesIntro:
          "Compare the purpose and tuition of each program before enrolling.",
        details: "View all course details",
        courses: [
          {
            name: "8-Hour Driver Improvement Clinic",
            price: "$100",
            description:
              "For certain DMV or court requirements, safe-driving points, or possible insurance benefits.",
          },
          {
            name: "3X Fail Driver's Manual Course",
            price: "$149",
            description:
              "An eight-hour course for students who failed the Virginia knowledge exam three times.",
          },
          {
            name: "12-Hour RADEP Program",
            price: "$180",
            description:
              "Combines the eight-hour Driver Improvement Clinic with four hours of reckless or aggressive driving education.",
          },
          {
            name: "4-Hour RADEP Course",
            price: "$90",
            description:
              "For qualifying referrals who have already completed the required eight-hour clinic.",
          },
          {
            name: "30-Hour Online Driver Education",
            price: "$150",
            description:
              "Virginia online driver education with the parent and teen component when applicable.",
          },
        ],
        localTitle: "Visit our Richmond office",
        addressLabel: "Address",
        address: "6802 Paragon Pl, Suite 410, Richmond, VA 23230",
        officeHours: "Office hours: Tuesday and Friday, 10 AM–1 PM",
        appointment: "An appointment is required for office visits.",
        directions: "Get directions",
        faqTitle: "Questions about our Richmond driving school",
        faqs: [
          {
            question:
              "Is Abigail's Driving School licensed by the Virginia DMV?",
            answer:
              "Yes. Abigail's Driving School is a Virginia DMV-licensed driving school offering programs for Virginia drivers.",
          },
          {
            question: "Can I complete my course online?",
            answer:
              "Yes. The programs listed on this page are available online. Review the requirements on your DMV, court, or insurance document before choosing a course.",
          },
          {
            question: "Is Spanish-language assistance available?",
            answer: "Yes. Call or text 703-637-8250 for assistance in Spanish.",
          },
          {
            question: "What areas do you serve?",
            answer:
              "The school is located in Richmond and serves students from Richmond, Henrico County, and Chesterfield County, as well as online-course students across Virginia.",
          },
        ],
        finalTitle: "Ready to get started?",
        finalText:
          "Compare the programs, select the course that matches your requirement, and enroll online.",
      }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faqs.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={copy.title}
        description={copy.description}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <article className="richmond-landing">
        <header className="richmond-hero">
          <p className="richmond-kicker">{copy.kicker}</p>
          <h1>{copy.heading}</h1>
          <p className="richmond-lead">{copy.intro}</p>
          <div className="richmond-actions">
            <a
              className="richmond-action-primary"
              href={enrollmentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.enroll}
            </a>
            <a href={`tel:${phone}`}>{copy.call}</a>
            <a href={`sms:${phone}`}>{copy.text}</a>
          </div>
        </header>

        <section className="richmond-trust">
          <div>
            <h2>{copy.trustTitle}</h2>
            <p>{copy.trustText}</p>
          </div>
          <ul>
            {copy.features.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="richmond-courses" aria-labelledby="courses-heading">
          <h2 id="courses-heading">{copy.coursesTitle}</h2>
          <p>{copy.coursesIntro}</p>
          <div className="richmond-course-grid">
            {copy.courses.map(course => (
              <article className="richmond-course" key={course.name}>
                <p className="richmond-price">{course.price}</p>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
              </article>
            ))}
          </div>
          <Link className="richmond-text-link" to="/online-training">
            {copy.details} →
          </Link>
        </section>

        <section className="richmond-local">
          <div>
            <h2>{copy.localTitle}</h2>
            <p>
              <strong>{copy.addressLabel}:</strong> {copy.address}
            </p>
            <p>{copy.officeHours}</p>
            <p>{copy.appointment}</p>
          </div>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=6802+Paragon+Pl+Suite+410+Richmond+VA+23230"
            target="_blank"
            rel="noopener noreferrer"
          >
            {copy.directions}
          </a>
        </section>

        <section className="richmond-faq" aria-labelledby="faq-heading">
          <h2 id="faq-heading">{copy.faqTitle}</h2>
          {copy.faqs.map(item => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </section>

        <section className="richmond-final-cta">
          <h2>{copy.finalTitle}</h2>
          <p>{copy.finalText}</p>
          <div className="richmond-actions">
            <a
              className="richmond-action-primary"
              href={enrollmentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.enroll}
            </a>
            <a href={`tel:${phone}`}>{copy.call}</a>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default RichmondDrivingSchoolPage
