import React from "react"
import { useIntl } from "gatsby-plugin-intl"

import "./ContactActions.css"

const enrollmentUrl =
  "https://online.abigailsdrivingschool.com/?utm_source=abigailsdrivingschool.com&utm_medium=website&utm_campaign=richmond_driving_school"

const trackAction = action => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: "contact_action",
      contact_action: action,
    })
  }
}

const ContactActions = () => {
  const intl = useIntl()
  const spanish = intl.locale === "es"
  const phone = spanish ? "+17036378250" : "+18048237730"
  const labels = spanish
    ? { call: "Llamar", text: "Mensaje", enroll: "Inscribirse" }
    : { call: "Call", text: "Text", enroll: "Enroll" }

  return (
    <nav className="mobile-contact-actions" aria-label="Contact and enrollment">
      <a href={`tel:${phone}`} onClick={() => trackAction("call")}>
        <span aria-hidden="true">☎</span>
        {labels.call}
      </a>
      <a href={`sms:${phone}`} onClick={() => trackAction("text")}>
        <span aria-hidden="true">✉</span>
        {labels.text}
      </a>
      <a
        href={enrollmentUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackAction("enroll")}
      >
        <span aria-hidden="true">✓</span>
        {labels.enroll}
      </a>
    </nav>
  )
}

export default ContactActions
