import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"
import "./PopularCourses.css"
import ProgramHelp from "./ProgramHelp"

export default function ProgramPaths() {
  const spanish = useIntl().locale === "es"
  return <section className="popular-courses" aria-labelledby="program-paths-title">
    <p className="popular-courses-kicker">{spanish ? "ELIJA SU SIGUIENTE PASO" : "CHOOSE YOUR NEXT STEP"}</p>
    <h2 id="program-paths-title">{spanish ? "Cursos en línea, clases presenciales o manejo práctico" : "Online courses, in-person classes or behind-the-wheel"}</h2>
    <p className="popular-courses-intro">{spanish ? "Elija el tipo de formación que necesita para ver las opciones y registrarse." : "Choose the type of training you need to see your options and sign up."}</p>
    <div className="popular-courses-grid program-paths-grid">
      <article className="popular-course-card">
        <h3>{spanish ? "Cursos en línea" : "Online Courses"}</h3>
        <p>{spanish ? "Mejora del conductor, Manual 3X Fail, RADEP y educación vial teórica. Compare cursos y precios; cree su cuenta y pague en el portal del curso." : "Driver Improvement, 3X Fail Driver’s Manual, RADEP and classroom driver education. Compare courses and prices, then create your account and pay in the course portal."}</p>
        <Link className="popular-course-enroll" to="/online-training">{spanish ? "VER CURSOS EN LÍNEA" : "VIEW ONLINE COURSES"}</Link>
        <ProgramHelp program="online_courses" />
      </article>
      <article className="popular-course-card">
        <h3>{spanish ? "Clases privadas presenciales" : "Private In-Person Classes"}</h3>
        <p>{spanish ? "Curso de 8 horas del Manual del Conductor para estudiantes que reprobaron el examen de conocimientos tres veces. $175 entre semana en inglés o español; $200 los fines de semana en español. Por cita en Richmond." : "Eight-hour Driver’s Manual course for students who failed the knowledge exam three times. $175 weekday classes in English or Spanish; $200 weekend classes in Spanish. By appointment in Richmond."}</p>
        <Link className="popular-course-enroll" to="/re-examination">{spanish ? "VER CLASES PRESENCIALES" : "VIEW IN-PERSON CLASSES"}</Link>
        <ProgramHelp program="re_examination" />
      </article>
      <article className="popular-course-card">
        <h3>{spanish ? "Manejo práctico" : "Behind-the-Wheel"}</h3>
        <p>{spanish ? "Clases privadas de $75 y el programa de manejo práctico de $425. Vea también el paquete opcional para adultos de $549. Elija su opción y reserve su primera visita en Setmore desde el 2 de noviembre de 2026." : "$75 private driving lessons and the $425 behind-the-wheel program. Also explore the optional $549 adult package. Choose your option and book your first visit in Setmore from November 2, 2026."}</p>
        <Link className="popular-course-enroll" to="/behind-the-wheel">{spanish ? "VER OPCIONES DE MANEJO" : "VIEW DRIVING OPTIONS"}</Link>
        <ProgramHelp program="behind_the_wheel" />
      </article>
    </div>
    <div className="popular-courses-footer"><Link to="/re-examination">{spanish ? "3X FAIL: CLASES PRIVADAS Y EN LÍNEA" : "3X FAIL: PRIVATE AND ONLINE CLASSES"}</Link></div>
  </section>
}
