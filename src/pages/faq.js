import React from "react"
import Helmet from "react-helmet"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/faq.css"

const BOOKING_URL = "https://abigailsdrivingschoolonline.setmore.com/mohamed"
const CATALOG_URL = "https://online.abigailsdrivingschool.com/"
const DI_ENROLL_URL =
  "https://online.abigailsdrivingschool.com/enroll/va-driver-improvement"
const RADEP_URL = "https://online.abigailsdrivingschool.com/radep"
const PACKAGE_URL = `${BOOKING_URL}?step=time-slot&products=a40ce5e1-4e93-415b-a764-6c113a5f7b6a&type=service&staff=r0c7f1634164174507&staffSelected=false`

const QUESTION_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const SECTIONS = [
  { id: "getting-licensed", titleKey: "s1_title", items: [1, 2, 3] },
  { id: "courses-prices", titleKey: "s2_title", items: [4, 5, 6, 7, 8, 9] },
  { id: "booking-lessons", titleKey: "s3_title", items: [10, 11, 12, 13] },
  { id: "online-spanish", titleKey: "s4_title", items: [14, 15] },
]

const QUESTION_LINKS = {
  1: [{ labelKey: "q1_link_label", to: "/virginia-driver-license-18-20" }],
  2: [{ labelKey: "q2_link_label", to: "/virginia-driver-license-18-20" }],
  3: [{ labelKey: "q3_link_label", to: "/re-examination" }],
  4: [{ labelKey: "q4_link_label", href: DI_ENROLL_URL, external: true }],
  6: [{ labelKey: "q6_link_label", href: RADEP_URL, external: true }],
  7: [{ labelKey: "q7_link_label", to: "/behind-the-wheel" }],
  8: [{ labelKey: "q8_link_label", href: BOOKING_URL, external: true }],
  9: [{ labelKey: "q9_link_label", href: PACKAGE_URL, external: true }],
  10: [
    { labelKey: "q10_link_booking", href: BOOKING_URL, external: true },
    { labelKey: "q10_link_courses", href: CATALOG_URL, external: true },
  ],
  11: [{ labelKey: "q11_link_label", to: "/booking-policy" }],
  15: [{ labelKey: "q15_link_label", href: "tel:+17036378250" }],
}

const FaqPage = ({ intl }) => {
  const t = key => intl.formatMessage({ id: `faq_page.${key}` })

  const faqs = QUESTION_NUMBERS.map(n => ({
    question: t(`q${n}_q`),
    answer: t(`q${n}_a`),
  }))

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(item => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  const renderLink = (link, index) => {
    const label = t(link.labelKey)
    if (link.to) {
      return (
        <Link key={index} to={link.to}>
          {label}
        </Link>
      )
    }
    if (link.external) {
      return (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      )
    }
    return (
      <a key={index} href={link.href}>
        {label}
      </a>
    )
  }

  return (
    <Layout>
      <SEO lang={intl.locale} title={t("seo_title")} description={t("seo_description")} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <article className="faq-page" aria-labelledby="faq-title">
        <header className="faq-heading">
          <p className="faq-eyebrow">{t("eyebrow")}</p>
          <h1 id="faq-title">{t("title")}</h1>
          <p className="faq-intro">{t("intro")}</p>
        </header>
        <nav className="faq-jump-nav" aria-label={t("nav_label")}>
          {SECTIONS.map(section => (
            <a href={`#${section.id}`} key={section.id}>
              {t(section.titleKey)}
            </a>
          ))}
        </nav>
        {SECTIONS.map(section => (
          <section
            className="faq-group"
            aria-labelledby={section.id}
            key={section.id}
          >
            <h2 id={section.id}>{t(section.titleKey)}</h2>
            {section.items.map(n => (
              <details key={n} open={n === 1}>
                <summary>{t(`q${n}_q`)}</summary>
                <div className="faq-answer">
                  <p>{t(`q${n}_a`)}</p>
                  {(QUESTION_LINKS[n] || []).map((link, index) => (
                    <p key={index}>{renderLink(link, index)}</p>
                  ))}
                </div>
              </details>
            ))}
          </section>
        ))}
        <aside className="faq-help" id="faq-help" aria-labelledby="faq-help-title">
          <h2 id="faq-help-title">{t("help_title")}</h2>
          <p>{t("help_text")}</p>
          <a
            className="faq-cta"
            href={CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cta_programs")}
          </a>
          <div className="faq-contact-links">
            <a href="tel:+18042563147">{t("phone_en_label")}</a>
            <a href="tel:+17036378250">{t("phone_es_label")}</a>
            <a href="mailto:abigailsinstructor@gmail.com">
              abigailsinstructor@gmail.com
            </a>
          </div>
          <p className="faq-contact-hours">{t("help_hours")}</p>
        </aside>
      </article>
    </Layout>
  )
}

export default injectIntl(FaqPage)
