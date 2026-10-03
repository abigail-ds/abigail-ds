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
      title={spanish ? "Manejo práctico en Richmond, VA — Reserve ahora" : "Behind-the-Wheel in Richmond, VA — Book Now"}
      description={spanish ? "Reserve clases privadas y programas de manejo práctico para adultos y adolescentes desde el 2 de noviembre de 2026. Mañanas, tardes y fines de semana alternos." : "Book private driving lessons and behind-the-wheel programs for adults and teens in Richmond from November 2, 2026. Mornings, evenings and alternating weekends."} />
    <BehindTheWheel fullPage />
  </Layout>
}
