import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"

import "./PopularCourses.css"

const courseUrls = {
  improvement:
    "https://online.abigailsdrivingschool.com/enroll/va-driver-improvement?utm_source=abigailsdrivingschool.com&utm_medium=website&utm_campaign=homepage_courses&utm_content=driver_improvement",
  manual:
    "https://online.abigailsdrivingschool.com/enroll/driver-manual?utm_source=abigailsdrivingschool.com&utm_medium=website&utm_campaign=homepage_courses&utm_content=three_time_fail",
  radep:
    "https://online.abigailsdrivingschool.com/enroll/bundle/12hr-radep?utm_source=abigailsdrivingschool.com&utm_medium=website&utm_campaign=homepage_courses&utm_content=radep_12_hour",
}

const PopularCourses = () => {
  const intl = useIntl()
  const spanish = intl.locale === "es"
  const copy = spanish
    ? {
        kicker: "INSCRIPCIÓN EN LÍNEA",
        title: "Elija el curso que necesita",
        intro:
          "Compare el propósito y el precio antes de pagar. Si no sabe cuál curso necesita, llámenos o envíenos un mensaje de texto.",
        enroll: "INSCRIBIRSE AHORA",
        compare: "COMPARAR TODOS LOS CURSOS",
        support: "Llamar: 804-256-3147 (opción 2)",
        courses: [
          {
            key: "improvement",
            name: "Mejora del conductor de 8 horas",
            price: "$95 + $3.33 de procesamiento · Total: $98.33",
            detail:
              "Para ciertos requisitos del DMV o tribunal, puntos de manejo seguro o posibles beneficios de seguro.",
          },
          {
            key: "manual",
            name: "Curso del Manual – 3X Fail",
            price: "$149 + $5.22 de procesamiento · Total: $154.22",
            detail:
              "Curso de ocho horas para quienes reprobaron tres veces el examen de conocimientos de Virginia.",
          },
          {
            key: "radep",
            name: "Programa RADEP de 12 horas",
            price: "$180 + $6.30 de procesamiento · Total: $186.30",
            detail:
              "Combina la clínica de ocho horas con cuatro horas de educación sobre conducción imprudente o agresiva.",
          },
        ],
      }
    : {
        kicker: "ONLINE ENROLLMENT",
        title: "Choose the course you need",
        intro:
          "Compare the purpose and price before paying. If you are unsure which course you need, call or text us first.",
        enroll: "ENROLL NOW",
        compare: "COMPARE ALL COURSES",
        support: "Call: 804-256-3147 (press 1)",
        courses: [
          {
            key: "improvement",
            name: "8-Hour Driver Improvement",
            price: "$95 + $3.33 processing · Total: $98.33",
            detail:
              "For certain DMV or court requirements, safe-driving points, or possible insurance benefits.",
          },
          {
            key: "manual",
            name: "3X Fail Driver's Manual Course",
            price: "$149 + $5.22 processing · Total: $154.22",
            detail:
              "An eight-hour course for students who failed the Virginia knowledge exam three times.",
          },
          {
            key: "radep",
            name: "12-Hour RADEP Program",
            price: "$180 + $6.30 processing · Total: $186.30",
            detail:
              "Combines the eight-hour clinic with four hours of reckless or aggressive driving education.",
          },
        ],
      }

  return (
    <section
      className="popular-courses"
      aria-labelledby="popular-courses-title"
    >
      <p className="popular-courses-kicker">{copy.kicker}</p>
      <h2 id="popular-courses-title">{copy.title}</h2>
      <p className="popular-courses-intro">{copy.intro}</p>
      <div className="popular-courses-grid">
        {copy.courses.map(course => (
          <article className="popular-course-card" key={course.key}>
            <p className="popular-course-price">{course.price}</p>
            <h3>{course.name}</h3>
            <p>{course.detail}</p>
            <a
              className="popular-course-enroll"
              href={courseUrls[course.key]}
            >
              {spanish ? `Inscribirme: ${course.name}` : `Enroll: ${course.name}`}
            </a>
          </article>
        ))}
      </div>
      <p className="popular-courses-intro">
        {spanish
          ? "Cómo comenzar: elija su curso, cree su cuenta y pague en nuestro portal de cursos. Después del pago, acceda al curso en línea. Guarde sus datos de acceso para continuar más tarde. Revise el total antes de pagar."
          : "How to start: choose your course, create your account and pay in our course portal. After payment, access your online course. Save your login details so you can return later. Review the total before paying."}
      </p>
      <div className="popular-courses-footer">
        <Link to="/online-training">{copy.compare}</Link>
        <a href="tel:+18042563147">
          {copy.support}
        </a>
        <a href={`sms:${spanish ? "+17036378250" : "+18048237730"}`}>
          {spanish ? "TEXTO EN ESPAÑOL" : "TEXT IN ENGLISH"}
        </a>
      </div>
      <p className="popular-courses-intro">
        {spanish
          ? "Atención por teléfono y texto: 9 a. m.–4 p. m. Para requisitos judiciales o del DMV, confirme el curso indicado en su aviso antes de inscribirse."
          : "Phone and text support: 9 a.m.–4 p.m. For court or DMV requirements, confirm the course named in your notice before enrolling."}
      </p>
    </section>
  )
}

export default PopularCourses
