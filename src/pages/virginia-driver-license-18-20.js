import React from "react"
import Helmet from "react-helmet"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./virginia-driver-license-18-20.css"

const BOOKING_BASE = "https://abigailsdrivingschoolonline.setmore.com/mohamed"
const STAFF = "r0c7f1634164174507"
const PACKAGE_URL = `${BOOKING_BASE}?step=time-slot&products=a40ce5e1-4e93-415b-a764-6c113a5f7b6a&type=service&staff=${STAFF}&staffSelected=false`
const BTW_URL = `${BOOKING_BASE}?step=time-slot&products=c4b3e5a6-6c5c-480d-92ca-f23f3471e1c5&type=service&staff=${STAFF}&staffSelected=false`
const CLASSROOM_URL =
  "https://online.abigailsdrivingschool.com/enroll/va-drivers-ed?audience=adult"

const STEP_KEYS = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const FAQ_KEYS = [1, 2, 3, 4, 5, 6, 7, 8]

const VirginiaDriverLicense1820 = ({ intl }) => {
  const t = key => intl.formatMessage({ id: `va_license_1820.${key}` })

  const rows = [
    {
      label: t("row_teen_label"),
      before: t("row_teen_before"),
      after: t("row_teen_after"),
    },
    {
      label: t("row_adult_label"),
      before: t("row_adult_before"),
      after: t("row_adult_after"),
      highlight: true,
    },
    {
      label: t("row_older_label"),
      before: t("row_older_before"),
      after: t("row_older_after"),
    },
  ]

  const options = [
    {
      name: t("option_1_name"),
      price: t("option_1_price"),
      text: t("option_1_text"),
      cta: t("option_1_cta"),
      url: PACKAGE_URL,
    },
    {
      name: t("option_2_name"),
      price: t("option_2_price"),
      text: t("option_2_text"),
      cta: t("option_2_cta"),
      url: CLASSROOM_URL,
    },
    {
      name: t("option_3_name"),
      price: t("option_3_price"),
      text: t("option_3_text"),
      cta: t("option_3_cta"),
      url: BTW_URL,
    },
  ]

  const faqs = FAQ_KEYS.map(n => ({
    question: t(`faq_${n}_q`),
    answer: t(`faq_${n}_a`),
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

  return (
    <Layout>
      <SEO lang={intl.locale} title={t("seo_title")} description={t("seo_description")} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <article className="va1820-page" aria-labelledby="va1820-title">
        <header className="va1820-heading">
          <p className="va1820-eyebrow">{t("eyebrow")}</p>
          <h1 id="va1820-title">{t("title")}</h1>
          <p className="va1820-intro">{t("intro")}</p>
        </header>

        <aside className="va1820-summary" aria-labelledby="va1820-summary-title">
          <h2 id="va1820-summary-title">{t("summary_title")}</h2>
          <ul>
            <li>{t("summary_1")}</li>
            <li>{t("summary_2")}</li>
            <li>{t("summary_3")}</li>
            <li>{t("summary_4")}</li>
          </ul>
        </aside>

        <section className="va1820-section" aria-labelledby="va1820-changes-title">
          <h2 id="va1820-changes-title">{t("changes_title")}</h2>
          <p>{t("changes_intro")}</p>
          <div className="va1820-table-wrap">
            <table className="va1820-table">
              <thead>
                <tr>
                  <th scope="col">{t("col_age")}</th>
                  <th scope="col">{t("col_before")}</th>
                  <th scope="col">{t("col_after")}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(row => (
                  <tr key={row.label} className={row.highlight ? "va1820-row-highlight" : undefined}>
                    <th scope="row">{row.label}</th>
                    <td>{row.before}</td>
                    <td>{row.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="va1820-section" aria-labelledby="va1820-both-title">
          <h2 id="va1820-both-title">{t("both_title")}</h2>
          <p>{t("both_text_1")}</p>
          <p>{t("both_text_2")}</p>
        </section>

        <section className="va1820-section" aria-labelledby="va1820-program-title">
          <h2 id="va1820-program-title">{t("program_title")}</h2>
          <p>{t("program_intro")}</p>
          <ul className="va1820-program-list">
            <li>{t("program_1")}</li>
            <li>{t("program_2")}</li>
            <li>{t("program_3")}</li>
            <li>{t("program_4")}</li>
          </ul>
          <p>{t("program_outro")}</p>
        </section>

        <section className="va1820-section" aria-labelledby="va1820-timeline-title">
          <h2 id="va1820-timeline-title">{t("timeline_title")}</h2>
          <ol className="va1820-steps">
            {STEP_KEYS.map(n => (
              <li key={n}>{t(`step_${n}`)}</li>
            ))}
          </ol>
        </section>

        <section className="va1820-section" aria-labelledby="va1820-mistakes-title">
          <h2 id="va1820-mistakes-title">{t("mistakes_title")}</h2>
          <div className="va1820-cards">
            {[1, 2, 3, 4].map(n => (
              <div className="va1820-card" key={n}>
                <h3>{t(`mistake_${n}_title`)}</h3>
                <p>{t(`mistake_${n}_text`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="va1820-section" aria-labelledby="va1820-options-title">
          <h2 id="va1820-options-title">{t("options_title")}</h2>
          <p>{t("options_intro")}</p>
          <div className="va1820-cards">
            {options.map(option => (
              <div className="va1820-card" key={option.name}>
                <p className="va1820-price">{option.price}</p>
                <h3>{option.name}</h3>
                <p>{option.text}</p>
                <a
                  className="va1820-card-link"
                  href={option.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {option.cta}
                </a>
              </div>
            ))}
          </div>
        </section>

        <aside className="va1820-cta" aria-labelledby="va1820-cta-title">
          <h2 id="va1820-cta-title">{t("cta_title")}</h2>
          <p>{t("cta_text")}</p>
          <a
            className="va1820-cta-button"
            href={PACKAGE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cta_button")}
          </a>
          <p className="va1820-cta-secondary">
            <Link to="/behind-the-wheel">{t("cta_secondary")}</Link>
          </p>
        </aside>

        <section className="va1820-section" aria-labelledby="va1820-faq-title">
          <h2 id="va1820-faq-title">{t("faq_title")}</h2>
          <div className="va1820-faq">
            {faqs.map(item => (
              <div className="va1820-faq-item" key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="va1820-sources">{t("sources")}</p>
      </article>
    </Layout>
  )
}

export default injectIntl(VirginiaDriverLicense1820)
