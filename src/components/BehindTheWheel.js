import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"
import "./PopularCourses.css"

const BehindTheWheel = ({ fullPage = false }) => {
  const spanish = useIntl().locale === "es"
  const Heading = fullPage ? "h1" : "h2"
  const phone = spanish ? "+17036378250" : "+18048237730"
  const courses = spanish
    ? [
        ["Clase privada de manejo", "$75", "60 minutos de instrucción individual para adultos y adolescentes elegibles con permiso válido. Práctica de control del vehículo, estacionamiento y manejo en carretera. No sustituye el programa completo de educación vial."],
        ["Manejo práctico: teoría completada", "$425", "Precio total por estudiante. Para estudiantes elegibles que ya completaron educación vial teórica aprobada: siete períodos de manejo y siete de observación, de 50 minutos cada uno. Se coordinan siete visitas de 100 minutos cuando corresponda."],
        ["Adultos: teoría en línea + manejo", "$549", "Precio propuesto del paquete completo, sujeto a confirmación. Incluye educación vial teórica en línea y el programa de manejo y observación. La elegibilidad para la exención de adultos y los requisitos de examen se revisan antes de inscribirse."],
      ]
    : [
        ["Private driving lesson", "$75", "60 minutes of one-to-one instruction for adults and eligible teens with a valid learner permit. Practice vehicle control, parking and road driving. Private lessons are separate from the complete driver-education program."],
        ["Behind-the-wheel: classroom completed", "$425", "Full-program price per student. For eligible students who already completed approved classroom driver education: seven driving periods and seven observation periods, each 50 minutes. Seven 100-minute visits are coordinated where applicable."],
        ["Adults: online class + behind-the-wheel", "$549", "Proposed complete-package price, subject to confirmation. Includes online classroom driver education and the driving and observation program. Adult-waiver eligibility and required testing arrangements are reviewed before enrollment."],
      ]
  return (
    <section className="popular-courses" aria-labelledby="behind-the-wheel-title">
      <p className="popular-courses-kicker">{spanish ? "PRÓXIMAMENTE · RICHMOND, VA" : "COMING SOON · RICHMOND, VA"}</p>
      <Heading id="behind-the-wheel-title">{spanish ? "Manejo práctico para adultos y adolescentes" : "Behind-the-wheel for adults and teens"}</Heading>
      <p className="popular-courses-intro">
        {spanish ? "¿Ya completó la teoría de educación vial? Prepare su siguiente paso con horarios por la mañana y algunas tardes." : "Already completed classroom driver education? Plan your next step with morning and selected evening availability."}
      </p>
      <p className="popular-courses-intro" role="note">
        <strong>{spanish ? "Próximamente: programas de manejo práctico." : "Behind-the-wheel programs are coming soon."}</strong>{" "}
        {spanish ? "Actualmente aceptamos solicitudes de información, no reservas de manejo ni pagos. No hay una fecha de inicio confirmada." : "We are accepting interest requests only, not driving appointments or payments. A start date has not been confirmed."}
      </p>
      <div className="popular-courses-grid">
        {courses.map(([name, price, detail]) => (
          <article className="popular-course-card" key={name}>
            <p className="popular-course-price">{price}</p>
            <h3>{name}</h3>
            <p>{detail}</p>
          </article>
        ))}
      </div>
      <p className="popular-courses-intro">
        {spanish ? "Horario previsto: lunes a viernes, 6–9 a. m.; lunes, martes y viernes, 6–9 p. m. La disponibilidad depende del programa, emparejamiento de estudiantes y lugar de encuentro." : "Planned availability: Monday–Friday, 6–9 a.m.; Monday, Tuesday and Friday, 6–9 p.m. Scheduling depends on the program, student pairing and meeting location."}
      </p>
      {fullPage && <>
        <h2>{spanish ? "Cómo comenzar" : "How to get started"}</h2>
        <ol style={{ textAlign: "left", maxWidth: "720px", margin: "20px auto" }}>
          <li>{spanish ? "Solicite información e indique si necesita práctica privada, solo manejo práctico o teoría y manejo." : "Request information and tell us whether you need private practice, behind-the-wheel only, or classroom and driving."}</li>
          <li>{spanish ? "Revisaremos su permiso, comprobante de teoría cuando corresponda y requisitos del programa antes de confirmar la inscripción." : "We will review your learner permit, classroom completion where applicable and program requirements before confirming enrollment."}</li>
          <li>{spanish ? "Una vez abierta la enseñanza, coordinaremos su secuencia de sesiones en Setmore. El precio del programa se paga una vez, no en cada visita." : "Once instruction opens, we will coordinate your session sequence in Setmore. The program price is paid once, not at every visit."}</li>
        </ol>
        <p className="popular-courses-intro">{spanish ? "La teoría se ofrece en línea; Setmore se utiliza para sesiones en el vehículo. Completar un curso no garantiza una licencia. Las clases privadas no son el curso de reexamen por tres fallas del examen práctico." : "Classroom study is online; Setmore is used for in-car sessions. Completing a course does not guarantee a license. Private practice lessons are not the three-road-test-failures re-examination course."}</p>
      </>}
      <div className="popular-courses-footer">
        <a href={`sms:${phone}`}>{spanish ? "SOLICITAR INFORMACIÓN POR TEXTO" : "TEXT TO REQUEST INFORMATION"}</a>
        <a href="mailto:abigailsinstructor@gmail.com?subject=Behind-the-wheel%20interest">{spanish ? "SOLICITAR INFORMACIÓN POR EMAIL" : "EMAIL YOUR INTEREST"}</a>
        {!fullPage && <Link to="/behind-the-wheel">{spanish ? "VER DETALLES" : "VIEW PROGRAM DETAILS"}</Link>}
      </div>
    </section>
  )
}

export default BehindTheWheel
