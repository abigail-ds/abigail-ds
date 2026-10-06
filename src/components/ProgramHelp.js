import React from "react"
import { useIntl } from "gatsby-plugin-intl"

export default function ProgramHelp({ program }) {
  const spanish = useIntl().locale === "es"
  const phone = spanish ? "+17036378250" : "+18048237730"
  const track = method => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({ event: "program_contact_click", program, method, language: spanish ? "es" : "en" })
    }
  }
  return <div className="program-help">
    <p>{spanish ? "¿Tiene preguntas antes de inscribirse?" : "Questions before you sign up?"}</p>
    <div>
      <a href="tel:+18042563147" onClick={() => track("call")}>{spanish ? "LLAMAR · OPCIÓN 2" : "CALL · PRESS 1"}</a>
      <a href={`sms:${phone}`} onClick={() => track("text")}>{spanish ? "TEXTO EN ESPAÑOL" : "TEXT IN ENGLISH"}</a>
    </div>
    <small>{spanish ? "Atención por teléfono y texto: 9 a. m.–4 p. m." : "Phone and text support: 9 a.m.–4 p.m."}</small>
  </div>
}
