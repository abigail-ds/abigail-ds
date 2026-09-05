/**
 * Shared metadata, language annotations, and structured business data.
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"

const businessStructuredData = {
  "@context": "https://schema.org",
  "@type": "DrivingSchool",
  "@id": "https://abigailsdrivingschool.com/#driving-school",
  name: "Abigail's Driving School",
  url: "https://abigailsdrivingschool.com/",
  telephone: "+1-804-823-7730",
  email: "abigailsInstructor@gmail.com",
  foundingDate: "2012",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6802 Paragon Pl, Suite 410",
    addressLocality: "Richmond",
    addressRegion: "VA",
    postalCode: "23230",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Richmond, Virginia" },
    { "@type": "AdministrativeArea", name: "Henrico County, Virginia" },
    {
      "@type": "AdministrativeArea",
      name: "Chesterfield County, Virginia",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["https://schema.org/Tuesday", "https://schema.org/Friday"],
      opens: "10:00",
      closes: "13:00",
    },
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-804-823-7730",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1-703-637-8250",
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
  ],
  sameAs: ["https://www.facebook.com/AbigailsDrivingSchool/"],
}

function SEO({ description, lang, meta, noindex, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )
  const { pathname } = useLocation()
  const metaDescription = description || site.siteMetadata.description
  const normalizedPath = pathname.endsWith("/") ? pathname : pathname + "/"
  const canonicalUrl = site.siteMetadata.siteUrl + normalizedPath
  const localeIndependentPath = normalizedPath.replace(
    /^\/(en|es)(?=\/|$)/,
    ""
  )
  const localizePath = locale =>
    site.siteMetadata.siteUrl + "/" + locale + localeIndependentPath

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={"%s | " + site.siteMetadata.title}
      meta={[
        { name: "description", content: metaDescription },
        { property: "og:title", content: title },
        { property: "og:description", content: metaDescription },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonicalUrl },
        {
          property: "og:locale",
          content: lang === "es" ? "es_US" : "en_US",
        },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: metaDescription },
      ]
        .concat(noindex ? [{ name: "robots", content: "noindex, nofollow" }] : [])
        .concat(meta)}
    >
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={localizePath("en")} />
      <link rel="alternate" hrefLang="es" href={localizePath("es")} />
      <link rel="alternate" hrefLang="x-default" href={localizePath("en")} />
      {!noindex && (
        <script type="application/ld+json">
          {JSON.stringify(businessStructuredData)}
        </script>
      )}
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
  noindex: false,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  noindex: PropTypes.bool,
  title: PropTypes.string.isRequired,
}

export default SEO
