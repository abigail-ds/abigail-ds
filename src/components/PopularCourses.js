import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"

import "./PopularCourses.css"

const courseUrls = {
  improvement:
    "https://online.abigailsdrivingschool.com/shop/virginia-driver-improvement-course/?utm_source=abigailsdrivingschool.com&utm_medium=website&utm_campaign=homepage_courses&utm_content=driver_improvement",
  manual:
    "https://online.abigailsdrivingschool.com/shop/3x-fail/?utm_source=abigailsdrivingschool.com&utm_medium=website&utm_campaign=homepage_courses&utm_content=three_time_fail",
  radep:
    "https://online.abigailsdrivingschool.com/shop/12hr-radep-reckless-aggressive-driver-education-program/?utm_source=abigailsdrivingschool.com&utm_medium=website&utm_campaign=homepage_courses&utm_content=radep_12_hour",
}

const trackCourse = course => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "course_enrollment_click",
      course,
      placement: "homepage",
    })
  }
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
        support: "Ayuda en español: 703-637-8250",
        courses: [
          {
            key: "improvement",
            name: "Mejora del conductor de 8 horas",
            price: "$100",
            detail:
              "Para ciertos requisitos del DMV o tribunal, puntos de manejo seguro o posibles beneficios de seguro.",
          },
          {
            key: "manual",
            name: "Curso del Manual – 3X Fail",
            price: "$149",
            detail:
              "Curso de ocho horas para quienes reprobaron tres veces el examen de conocimientos de Virginia.",
          },
          {
            key: "radep",
            name: "Programa RADEP de 12 horas",
            price: "$180",
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
        support: "Course help: 804-823-7730",
        courses: [
          {
            key: "improvement",
            name: "8-Hour Driver Improvement",
            price: "$100",
            detail:
              "For certain DMV or court requirements, safe-driving points, or possible insurance benefits.",
          },
          {
            key: "manual",
            name: "3X Fail Driver's Manual Course",
            price: "$149",
            detail:
              "An eight-hour course for students who failed the Virginia knowledge exam three times.",
          },
          {
            key: "radep",
            name: "12-Hour RADEP Program",
            price: "$180",
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
              onClick={() => trackCourse(course.key)}
            >
              {copy.enroll}
            </a>
          </article>
        ))}
      </div>
      <div className="popular-courses-footer">
        <Link to="/online-training">{copy.compare}</Link>
        <a href={`tel:${spanish ? "+17036378250" : "+18048237730"}`}>
          {copy.support}
        </a>
      </div>
    </section>
  )
}

export default PopularCourses
