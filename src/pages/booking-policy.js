import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function BookingPolicy() {
  const es = useIntl().locale === "es"
  return <Layout><SEO lang={es ? "es" : "en"} title={es ? "Política de reservas" : "Booking policy"} description={es ? "Cancele o cambie su cita en Setmore con al menos 24 horas de anticipación. Para pagos o reembolsos, comuníquese con la escuela antes de reservar." : "Cancel or reschedule your Setmore appointment at least 24 hours before it starts. For payment or refund questions, contact the school before booking."} /><main style={{maxWidth: 800, margin: "40px auto", padding: 24}}>
    <h1>{es ? "Política de reservas" : "Booking policy"}</h1>
    <p>{es ? "Cancele o cambie su cita en Setmore con al menos 24 horas de anticipación. Para solicitar ayuda dentro de las 24 horas, comuníquese con la escuela." : "Cancel or reschedule your Setmore appointment at least 24 hours before its start time. For assistance within 24 hours, contact the school."}</p>
    <p>{es ? "Si tiene preguntas sobre pagos o reembolsos, comuníquese con la escuela antes de reservar." : "For payment or refund questions, contact the school before booking."}</p>
    <p><a href="tel:+18042563147">804-256-3147</a> · <a href="sms:+18048237730">Text in English: 804-823-7730</a> · <a href="sms:+17036378250">Texto en español: 703-637-8250</a></p>
    <p>{es ? "Atención por teléfono y texto: 9 a. m.–4 p. m." : "Phone and text support: 9 a.m.–4 p.m."}</p>
  </main></Layout>
}
