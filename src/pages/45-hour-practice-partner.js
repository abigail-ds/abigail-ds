import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./45-hour-practice-partner.css"

const BOOKING_URL = "https://abigailsdrivingschoolonline.setmore.com/mohamed"

const STEP_KEYS = [1, 2, 3, 4]
const HELP_KEYS = [1, 2, 3, 4]
const PRICING_KEYS = [1, 2, 3]

const PracticePartner = ({ intl }) => {
  const t = key => intl.formatMessage({ id: `practice_page.${key}` })

  return (
    <Layout>
      <SEO lang={intl.locale} title={t("seo_title")} description={t("seo_description")} />
      <article className="pp-page" aria-labelledby="pp-title">
        <header className="pp-heading">
          <p className="pp-eyebrow">{t("eyebrow")}</p>
          <h1 id="pp-title">{t("title")}</h1>
          <p className="pp-intro">{t("intro")}</p>
        </header>

        <aside className="pp-summary" aria-labelledby="pp-summary-title">
          <h2 id="pp-summary-title">{t("summary_title")}</h2>
          <ul>
            <li>{t("summary_1")}</li>
            <li>{t("summary_2")}</li>
            <li>{t("summary_3")}</li>
            <li>{t("summary_4")}</li>
          </ul>
        </aside>

        <section className="pp-section" aria-labelledby="pp-req-title">
          <h2 id="pp-req-title">{t("req_title")}</h2>
          <p>{t("req_text_1")}</p>
          <p>{t("req_text_2")}</p>
        </section>

        <section className="pp-section" aria-labelledby="pp-how-title">
          <h2 id="pp-how-title">{t("how_title")}</h2>
          <p>{t("how_intro")}</p>
          <ol className="pp-steps">
            {STEP_KEYS.map(n => (
              <li key={n}>{t(`how_${n}`)}</li>
            ))}
          </ol>
        </section>

        <section className="pp-section" aria-labelledby="pp-helps-title">
          <h2 id="pp-helps-title">{t("helps_title")}</h2>
          <div className="pp-cards">
            {HELP_KEYS.map(n => (
              <div className="pp-card" key={n}>
                <h3>{t(`helps_${n}_title`)}</h3>
                <p>{t(`helps_${n}_text`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="pp-section" aria-labelledby="pp-night-title">
          <h2 id="pp-night-title">{t("night_title")}</h2>
          <p>{t("night_text")}</p>
        </section>

        <section className="pp-section" aria-labelledby="pp-pricing-title">
          <h2 id="pp-pricing-title">{t("pricing_title")}</h2>
          <ul className="pp-program-list">
            {PRICING_KEYS.map(n => (
              <li key={n}>{t(`pricing_${n}`)}</li>
            ))}
          </ul>
        </section>

        <section className="pp-section" aria-labelledby="pp-not-title">
          <h2 id="pp-not-title">{t("not_title")}</h2>
          <p>{t("not_text")}</p>
        </section>

        <aside className="pp-cta" aria-labelledby="pp-cta-title">
          <h2 id="pp-cta-title">{t("cta_title")}</h2>
          <p>{t("cta_text")}</p>
          <a
            className="pp-cta-button"
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cta_button")}
          </a>
          <p className="pp-cta-secondary">
            <a href="tel:+18042563147">{t("cta_phone")}</a>
          </p>
        </aside>

        <p className="pp-licensed">{t("licensed")}</p>
      </article>
    </Layout>
  )
}

export default injectIntl(PracticePartner)
