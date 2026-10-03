import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BehindTheWheel from "../components/BehindTheWheel"

export default function BehindTheWheelPage() {
  const intl = useIntl()
  const spanish = intl.locale === "es"
  return <Layout>
    <SEO lang={intl.locale}
      title={spanish ? "Manejo práctico en Richmond, VA — Próximamente" : "Behind-the-Wheel in Richmond, VA — Coming Soon"}
      description={spanish ? "Compare clases privadas y programas de manejo práctico para adultos y adolescentes. Horarios por la mañana y algunas tardes; próximamente." : "Compare private driving lessons and behind-the-wheel programs for adults and teens in Richmond. Morning and selected evening availability; coming soon."} />
    <BehindTheWheel fullPage />
  </Layout>
}
