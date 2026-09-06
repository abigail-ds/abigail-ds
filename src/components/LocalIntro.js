import React from "react"
import { Link, useIntl } from "gatsby-plugin-intl"

import "./LocalIntro.css"

const LocalIntro = () => {
  const intl = useIntl()
  const spanish = intl.locale === "es"

  return (
    <section className="local-intro" aria-labelledby="local-intro-title">
      <p className="local-intro-kicker">
        {spanish ? "Con licencia del DMV de Virginia" : "Virginia DMV-licensed"}
      </p>
      <h2 id="local-intro-title">
        {spanish
          ? "Escuela de manejo para Richmond, Henrico y Chesterfield"
          : "Driving School Serving Richmond, Henrico, and Chesterfield"}
      </h2>
      <p>
        {spanish
          ? "Complete en línea cursos de mejora del conductor, Manual 3X Fail, RADEP y educación vial de Virginia. Reciba ayuda en español por teléfono o mensaje de texto."
          : "Complete Virginia Driver Improvement, 3X Fail Driver's Manual, RADEP, and driver education courses online, with English and Spanish support when you need it."}
      </p>
      <div className="local-intro-actions">
        <Link className="local-intro-primary" to="/online-training">
          {spanish ? "Comparar cursos" : "Compare courses"}
        </Link>
        <Link
          className="local-intro-secondary"
          to="/driving-school-richmond-va"
        >
          {spanish ? "Información local" : "Richmond school information"}
        </Link>
      </div>
    </section>
  )
}

export default LocalIntro
