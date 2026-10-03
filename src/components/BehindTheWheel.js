import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"
import "./PopularCourses.css"

const BehindTheWheel = ({ fullPage = false }) => {
  const spanish = useIntl().locale === "es"
  const Heading = fullPage ? "h1" : "h2"
  const phone = spanish ? "+17036378250" : "+18048237730"
  const bookingUrl = "https://abigailsdrivingschoolonline.setmore.com/mohamed"
  const serviceIds = [
    "e854ffd1-0270-404b-b6c0-cbe62fea5d1b",
    "c4b3e5a6-6c5c-480d-92ca-f23f3471e1c5",
    "a40ce5e1-4e93-415b-a764-6c113a5f7b6a",
  ]
  const courses = spanish
    ? [
        ["Clase privada de manejo", "$75", "60 minutos de instrucción individual para adultos y adolescentes elegibles con permiso válido. Práctica de control del vehículo, estacionamiento y manejo en carretera. No sustituye el programa completo de educación vial."],
        ["Manejo práctico: teoría completada", "$425", "Precio total por estudiante. Para estudiantes elegibles que ya completaron educación vial teórica aprobada: siete períodos de manejo y siete de observación, de 50 minutos cada uno. Se coordinan siete visitas de 100 minutos cuando corresponda."],
        ["Adultos: teoría en línea + manejo", "$549", "Precio total del paquete completo. Incluye educación vial teórica en línea y el programa de manejo y observación. La elegibilidad para la exención de adultos y los requisitos de examen se revisan antes de inscribirse."],
      ]
    : [
        ["Private driving lesson", "$75", "60 minutes of one-to-one instruction for adults and eligible teens with a valid learner permit. Practice vehicle control, parking and road driving. Private lessons are separate from the complete driver-education program."],
        ["Behind-the-wheel: classroom completed", "$425", "Full-program price per student. For eligible students who already completed approved classroom driver education: seven driving periods and seven observation periods, each 50 minutes. Seven 100-minute visits are coordinated where applicable."],
        ["Adults: online class + behind-the-wheel", "$549", "Complete-package price. Includes online classroom driver education and the driving and observation program. Adult-waiver eligibility and required testing arrangements are reviewed before enrollment."],
      ]
  return (
    <section className="popular-courses" aria-labelledby="behind-the-wheel-title">
      <p className="popular-courses-kicker">{spanish ? "RESERVE AHORA · RICHMOND, VA" : "BOOK NOW · RICHMOND, VA"}</p>
      <Heading id="behind-the-wheel-title">{spanish ? "Manejo práctico para adultos y adolescentes" : "Behind-the-wheel for adults and teens"}</Heading>
      <p className="popular-courses-intro">
        {spanish ? "¿Ya completó la teoría de educación vial? Prepare su siguiente paso con horarios por la mañana y algunas tardes." : "Already completed classroom driver education? Plan your next step with morning and selected evening availability."}
      </p>
      <p className="popular-courses-intro" role="note">
        <strong>{spanish ? "Reservas abiertas para el 2 de noviembre de 2026 en adelante." : "Bookings are open for November 2, 2026 onward."}</strong>{" "}
        {spanish ? "Elija su programa y reserve su primera visita en Setmore. Confirmaremos los requisitos y coordinaremos las visitas restantes del programa." : "Choose your program and book your first visit in Setmore. We will confirm eligibility and coordinate the remaining program visits."}
      </p>
      <div className="popular-courses-grid">
        {courses.map(([name, price, detail], index) => (
          <article className="popular-course-card" key={name}>
            <p className="popular-course-price">{price}</p>
            {index === 2 && <p className="popular-courses-kicker">{spanish ? "PAQUETE OPCIONAL" : "OPTIONAL BUNDLE"}</p>}
            <h3>{name}</h3>
            <p>{detail}</p>
            {index === 2 && <p>{spanish ? "Después de reservar, comuníquese con nosotros para organizar su inscripción en la teoría en línea. Reservar en Setmore no crea una cuenta del curso; la teoría debe completarse antes de la primera visita de manejo." : "After booking, contact us to arrange online classroom enrollment. Your Setmore booking does not create a course account; classroom study must be completed before your first driving visit."}</p>}
            <a className="popular-course-enroll"
              href={`${bookingUrl}?step=time-slot&products=${serviceIds[index]}&type=service&staff=r0c7f1634164174507&staffSelected=false`}
              aria-label={spanish ? `Reservar: ${name}` : `Sign up: ${name}`}>
              {spanish ? "RESERVAR ESTE PROGRAMA" : "SIGN UP FOR THIS OPTION"}
            </a>
          </article>
        ))}
      </div>
      <p className="popular-courses-intro">
        {spanish ? "Horario: lunes a viernes, 6–9 a. m.; lunes, 4–9 p. m.; martes a viernes, 6–9 p. m. Sábados y domingos alternos, 9 a. m.–6 p. m., comenzando el 7–8 de noviembre. Horario del este. La disponibilidad depende del programa, emparejamiento de estudiantes y lugar de encuentro." : "Availability: Monday–Friday, 6–9 a.m.; Monday, 4–9 p.m.; Tuesday–Friday, 6–9 p.m. Alternating Saturdays and Sundays, 9 a.m.–6 p.m., starting November 7–8. All times Eastern. Scheduling depends on the program, student pairing and meeting location."}
      </p>
      {fullPage && <>
        <h2>{spanish ? "Cómo comenzar" : "How to get started"}</h2>
        <ol style={{ textAlign: "left", maxWidth: "720px", margin: "20px auto" }}>
          <li>{spanish ? "Elija práctica privada, solo manejo práctico o teoría y manejo, y reserve su primera visita en Setmore." : "Choose private practice, behind-the-wheel only, or classroom and driving, and book your first visit in Setmore."}</li>
          <li>{spanish ? "Revisaremos su permiso, comprobante de teoría cuando corresponda y requisitos del programa antes de confirmar la inscripción." : "We will review your learner permit, classroom completion where applicable and program requirements before confirming enrollment."}</li>
          <li>{spanish ? "Coordinaremos su secuencia de sesiones. Si necesita teoría en línea, comuníquese con nosotros después de reservar para organizar la inscripción antes de comenzar a manejar. El precio del programa se paga una vez, no en cada visita." : "We will coordinate your session sequence. If you need online classroom study, contact us after booking to arrange enrollment before driving begins. The program price is paid once, not at every visit."}</li>
        </ol>
        <p className="popular-courses-intro">{spanish ? "La teoría se ofrece en línea; Setmore se utiliza para sesiones en el vehículo. Completar un curso no garantiza una licencia. Las clases privadas no son el curso de reexamen por tres fallas del examen práctico." : "Classroom study is online; Setmore is used for in-car sessions. Completing a course does not guarantee a license. Private practice lessons are not the three-road-test-failures re-examination course."}</p>
      </>}
      <div className="popular-courses-footer">
        <a href={bookingUrl}>{spanish ? "RESERVAR EN SETMORE" : "BOOK IN SETMORE"}</a>
        <a href={`sms:${phone}`}>{spanish ? "SOLICITAR INFORMACIÓN POR TEXTO" : "TEXT TO REQUEST INFORMATION"}</a>
        <a href="mailto:abigailsinstructor@gmail.com?subject=Behind-the-wheel%20interest">{spanish ? "SOLICITAR INFORMACIÓN POR EMAIL" : "EMAIL YOUR INTEREST"}</a>
        {!fullPage && <Link to="/behind-the-wheel">{spanish ? "VER DETALLES" : "VIEW PROGRAM DETAILS"}</Link>}
      </div>
    </section>
  )
}

export default BehindTheWheel
