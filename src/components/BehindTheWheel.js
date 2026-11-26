import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"
import "./PopularCourses.css"
import ProgramHelp from "./ProgramHelp"

const BehindTheWheel = ({ fullPage = false }) => {
  const intl = useIntl()
  const spanish = intl.locale === "es"
  const Heading = fullPage ? "h1" : "h2"
  const phone = spanish ? "+17036378250" : "+18048237730"
  const bookingUrl = "https://abigailsdrivingschoolonline.setmore.com/mohamed"
  const applicationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeRHbtyf-rGsrELoHaLV27Mb1c7vl2U1vsa1FHka-EU0wuoRg/viewform"
  const serviceIds = [
    "e854ffd1-0270-404b-b6c0-cbe62fea5d1b",
    "8a692761-fa11-4d10-9653-ad927d7cb175",
    "c4b3e5a6-6c5c-480d-92ca-f23f3471e1c5",
    "a40ce5e1-4e93-415b-a764-6c113a5f7b6a",
    "199f8c5a-9fe4-4162-b3c3-5e733f0edd42",
  ]
  const courses = spanish
    ? [
        ["Clase privada de manejo", "$80", "60 minutos de instrucción individual para adultos y adolescentes elegibles con permiso válido. Práctica de control del vehículo, estacionamiento y manejo en carretera. No sustituye el programa completo de educación vial."],
        ["Paquete de 5 lecciones de manejo", "$375", "Cinco lecciones privadas de 60 minutos a $75 por hora, nuestra mejor tarifa por lección. Solicite una vez y programaremos las cinco sesiones con usted después de confirmar su solicitud."],
        ["Programa de manejo práctico — 7 sesiones", "$425", "Precio completo del programa por estudiante, para estudiantes elegibles que ya hayan completado la educación vial en el aula aprobada. Formato estándar: siete períodos de manejo de 50 minutos y siete períodos de observación de 50 minutos, en pareja con otro estudiante, en siete visitas de 100 minutos. Si no hay un segundo estudiante disponible para formar pareja, el programa se imparte en su lugar como siete sesiones individuales de manejo de una hora."],
        ["Adultos: teoría en línea + manejo", "$549", "Precio total del paquete completo. Incluye educación vial teórica en línea y el programa de manejo y observación. La elegibilidad para la exención de adultos y los requisitos de examen se revisan antes de inscribirse."],
        ["Adolescentes: teoría en línea + manejo", "$549", "Precio total del paquete completo para adolescentes. Incluye educación vial teórica en línea y el programa de manejo práctico: siete períodos de manejo de 50 minutos y siete períodos de observación de 50 minutos, con el examen práctico final de manejo. Se requiere un permiso de aprendizaje válido, y la teoría debe completarse antes de comenzar el manejo práctico."],
      ]
    : [
        ["Private driving lesson", "$80", "60 minutes of one-to-one instruction for adults and eligible teens with a valid learner permit. Practice vehicle control, parking and road driving. Private lessons are separate from the complete driver-education program."],
        ["5 Driving Lessons Package", "$375", "Five 60-minute private lessons at $75 per hour — our best per-lesson rate. Apply once, and we will schedule all five sessions with you after confirming your application."],
        ["Behind-the-Wheel Program — 7 Sessions", "$425", "Full-program price per student, for eligible students who have already completed approved classroom driver education. Standard format: seven 50-minute driving periods and seven 50-minute observation periods, paired with another student in seven 100-minute visits. If no second student is available to pair with, the program is instead delivered as seven one-hour, one-on-one driving sessions."],
        ["Adults: online class + behind-the-wheel", "$549", "Complete-package price. Includes online classroom driver education and the driving and observation program. Adult-waiver eligibility and required testing arrangements are reviewed before enrollment."],
        ["Teens: online class + behind-the-wheel", "$549", "Complete-package price for teens. Includes online classroom driver education and the behind-the-wheel program: seven 50-minute driving periods and seven 50-minute observation periods, with the final road skills test. A valid learner's permit is required, and classroom study must be completed before behind-the-wheel begins."],
      ]
  return (
    <section className="popular-courses" aria-labelledby="behind-the-wheel-title">
      <p className="popular-courses-kicker">{spanish ? "RESERVE AHORA · RICHMOND, VA" : "BOOK NOW · RICHMOND, VA"}</p>
      <Heading id="behind-the-wheel-title">{spanish ? "Manejo práctico para adultos y adolescentes" : "Behind-the-wheel for adults and teens"}</Heading>
      <p className="popular-courses-intro">
        {spanish ? "¿Ya completó la teoría de educación vial? Prepare su siguiente paso con horarios por la mañana y algunas tardes." : "Already completed classroom driver education? Plan your next step with morning and selected evening availability."}
      </p>
      <p className="popular-courses-intro" role="note">
        <strong>{spanish ? "Las reservas están abiertas ahora." : "Booking is open now."}</strong>{" "}
        {spanish ? "Las lecciones individuales se reservan al instante en Setmore. Los programas de varias sesiones comienzan con una solicitud: confirmamos los requisitos y luego coordinamos su horario de sesiones con usted." : "Single lessons book instantly in Setmore. Multi-session programs start with an application: we confirm eligibility, then coordinate your session schedule with you."}
      </p>
      <p className="popular-courses-intro">
        {intl.formatMessage({ id: "home.holiday_btw_intro" })}{" "}
        <Link to="/holiday-behind-the-wheel">{intl.formatMessage({ id: "home.holiday_btw_link" })}</Link>
      </p>
      <div className="popular-courses-grid">
        {courses.map(([name, price, detail], index) => (
          <article className="popular-course-card" key={name}>
            <p className="popular-course-price">{price}</p>
            {(index === 3 || index === 4) && <p className="popular-courses-kicker">{spanish ? "PAQUETE OPCIONAL" : "OPTIONAL BUNDLE"}</p>}
            <h3>{name}</h3>
            <p>{detail}</p>
            {(index === 3 || index === 4) && <p>{spanish ? "Después de solicitar, comuníquese con nosotros para organizar su inscripción en la teoría en línea. Su solicitud no crea una cuenta del curso; la teoría debe completarse antes de la primera visita de manejo." : "After applying, contact us to arrange online classroom enrollment. Your application does not create a course account; classroom study must be completed before your first driving visit."}</p>}
            {index === 3 && <p>{spanish ? "¿Tiene 18, 19 o 20 años? Las reglas de Virginia cambian el 1 de enero de 2027. " : "Are you 18, 19, or 20? Virginia's rules change on January 1, 2027. "}<Link to="/virginia-driver-license-18-20">{spanish ? "Lea nuestra guía sobre los requisitos de 2027" : "Read our guide to the 2027 requirements"}</Link></p>}
            <a className="popular-course-enroll"
              href={index === 0 ? `${bookingUrl}?step=time-slot&products=${serviceIds[index]}&type=service&staff=r0c7f1634164174507&staffSelected=false` : applicationUrl}
              aria-label={spanish ? (index === 0 ? `Reservar: ${name}` : `Solicitar: ${name}`) : (index === 0 ? `Sign up: ${name}` : `Apply: ${name}`)}>
              {index === 0 ? (spanish ? "RESERVAR ESTE PROGRAMA" : "SIGN UP FOR THIS OPTION") : (spanish ? "SOLICITAR ESTE PROGRAMA" : "APPLY FOR THIS PROGRAM")}
            </a>
            <ProgramHelp program={serviceIds[index]} />
          </article>
        ))}
      </div>
      <p className="popular-courses-intro" role="note">
        <strong>{spanish ? "¿Aún no está seguro? Comience con una lección." : "Not sure yet? Start with one lesson."}</strong>{" "}
        {spanish ? "Reserve una lección privada individual de $80 en Setmore: si se inscribe en un programa dentro de los 30 días, los $80 se acreditan al precio del programa y la lección cuenta como su primera sesión. ¿Prefiere sin compromiso? Pague por lección: reserve lecciones individuales de $80 una a la vez en Setmore, elija un horario disponible y pague cada lección al reservarla. Las lecciones de pago por sesión son lecciones privadas; los estudiantes que necesitan el certificado del programa de manejo práctico para su licencia deben completar el programa completo." : "Book a single $80 private lesson in Setmore \u2014 if you enroll in a program within 30 days, the $80 is credited toward the program price and the lesson counts as your first session. Prefer no commitment? Pay as you go: book single $80 lessons one at a time in Setmore, choose an available time, and pay for each lesson when you book. Pay-as-you-go lessons are private lessons; students who need the behind-the-wheel program certificate for licensing must complete the full program."}
      </p>
      <p className="popular-courses-intro">
        {spanish ? "Horario: lunes, martes y viernes, 6–9 a. m.; lunes, 4–9 p. m.; martes, 7–9 p. m.; viernes, 6–9 p. m. Sábados y domingos alternos, 9 a. m.–6 p. m., comenzando el 7–8 de noviembre. Horario del este. La disponibilidad depende del programa, emparejamiento de estudiantes y lugar de encuentro." : "Availability: Monday, Tuesday and Friday, 6–9 a.m.; Monday, 4–9 p.m.; Tuesday, 7–9 p.m.; Friday, 6–9 p.m. Alternating Saturdays and Sundays, 9 a.m.–6 p.m., starting November 7–8. All times Eastern. Scheduling depends on the program, student pairing and meeting location."}
      </p>
      {fullPage && <>
        <h2>{spanish ? "Cómo comenzar" : "How to get started"}</h2>
        <ol style={{ textAlign: "left", maxWidth: "720px", margin: "20px auto" }}>
          <li>{spanish ? "Elija práctica privada, solo manejo práctico o teoría y manejo. Las lecciones privadas se reservan en Setmore; los programas de varias sesiones comienzan con el formulario de solicitud." : "Choose private practice, behind-the-wheel only, or classroom and driving. Private lessons book in Setmore; multi-session programs start with the application form."}</li>
          <li>{spanish ? "Revisaremos su permiso, comprobante de teoría cuando corresponda y requisitos del programa antes de confirmar la inscripción." : "We will review your learner permit, classroom completion where applicable and program requirements before confirming enrollment."}</li>
          <li>{spanish ? "Coordinaremos su secuencia de sesiones. Si necesita teoría en línea, comuníquese con nosotros después de solicitar para organizar la inscripción antes de comenzar a manejar. El precio del programa se paga una vez, no en cada visita." : "We will coordinate your session sequence. If you need online classroom study, contact us after you apply to arrange enrollment before driving begins. The program price is paid once, not at every visit."}</li>
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
