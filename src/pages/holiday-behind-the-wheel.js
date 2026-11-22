import React from "react"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./holiday-behind-the-wheel.css"

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScXeMOKfhj6RdZcUlfUTejsfoWxUZFfexYRZF6HwSI7wQ17pg/viewform"
const FORM_EMBED_URL = `${FORM_URL}?embedded=true`

const DAY_KEYS = [1, 2, 3, 4, 5, 6]
const STEP_KEYS = [1, 2, 3]
const PROGRAM_KEYS = [1, 2, 3, 4]
const TEEN_KEYS = [1, 2, 3]
const PRICING_KEYS = [1, 2]
const PRACTICE_KEYS = [1, 2, 3, 4]

const HolidayBehindTheWheel = ({ intl }) => {
  const t = key => intl.formatMessage({ id: `holiday_btw.${key}` })

  const options = [
    {
      name: t("option_1_name"),
      price: t("option_1_price"),
      text: t("option_1_text"),
    },
    {
      name: t("option_2_name"),
      price: t("option_2_price"),
      text: t("option_2_text"),
    },
  ]

  return (
    <Layout>
      <SEO lang={intl.locale} title={t("seo_title")} description={t("seo_description")} />
      <article className="holiday-btw-page" aria-labelledby="holiday-btw-title">
        <header className="holiday-btw-heading">
          <p className="holiday-btw-eyebrow">{t("eyebrow")}</p>
          <h1 id="holiday-btw-title">{t("title")}</h1>
          <p className="holiday-btw-intro">{t("intro")}</p>
        </header>

        <aside className="holiday-btw-summary" aria-labelledby="holiday-btw-days-title">
          <h2 id="holiday-btw-days-title">{t("days_title")}</h2>
          <ul>
            {DAY_KEYS.map(n => (
              <li key={n}>{t(`day_${n}`)}</li>
            ))}
          </ul>
          <p>{t("days_note")}</p>
        </aside>

        <section className="holiday-btw-section" aria-labelledby="holiday-btw-how-title">
          <h2 id="holiday-btw-how-title">{t("how_title")}</h2>
          <ol className="holiday-btw-steps">
            {STEP_KEYS.map(n => (
              <li key={n}>{t(`step_${n}`)}</li>
            ))}
          </ol>
        </section>

        <section className="holiday-btw-section" aria-labelledby="holiday-btw-program-title">
          <h2 id="holiday-btw-program-title">{t("program_title")}</h2>
          <p>{t("program_intro")}</p>
          <ul className="holiday-btw-program-list">
            {PROGRAM_KEYS.map(n => (
              <li key={n}>{t(`program_${n}`)}</li>
            ))}
          </ul>
          <h3>{t("pricing_title")}</h3>
          <ul className="holiday-btw-program-list">
            {PRICING_KEYS.map(n => (
              <li key={n}>{t(`pricing_${n}`)}</li>
            ))}
          </ul>
        </section>

        <section className="holiday-btw-section" aria-labelledby="holiday-btw-teens-title">
          <h2 id="holiday-btw-teens-title">{t("teens_title")}</h2>
          <ul className="holiday-btw-program-list">
            {TEEN_KEYS.map(n => (
              <li key={n}>{t(`teens_${n}`)}</li>
            ))}
          </ul>
        </section>

        <section className="holiday-btw-section" aria-labelledby="holiday-btw-practice-title">
          <h2 id="holiday-btw-practice-title">{t("practice_title")}</h2>
          <p>{t("practice_intro")}</p>
          <ul className="holiday-btw-program-list">
            {PRACTICE_KEYS.map(n => (
              <li key={n}>{t(`practice_${n}`)}</li>
            ))}
          </ul>
          <p>
            <Link to="/45-hour-practice-partner">{t("practice_link")}</Link>
          </p>
        </section>

        <section className="holiday-btw-section" aria-labelledby="holiday-btw-options-title">
          <h2 id="holiday-btw-options-title">{t("options_title")}</h2>
          <div className="holiday-btw-cards">
            {options.map(option => (
              <div className="holiday-btw-card" key={option.name}>
                <p className="holiday-btw-price">{option.price}</p>
                <h3>{option.name}</h3>
                <p>{option.text}</p>
                <a className="holiday-btw-card-link" href="#holiday-btw-apply">
                  {t("options_cta")}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section
          className="holiday-btw-section"
          id="holiday-btw-apply"
          aria-labelledby="holiday-btw-form-title"
        >
          <h2 id="holiday-btw-form-title">{t("form_title")}</h2>
          <p>{t("form_intro")}</p>
          {intl.locale === "es" && (
            <p className="holiday-btw-note">{t("form_note_es")}</p>
          )}
          <iframe
            className="holiday-btw-form-frame"
            src={FORM_EMBED_URL}
            title={t("form_title")}
            loading="lazy"
          >
            {t("form_fallback")}
          </iframe>
          <p>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
              {t("form_fallback")}
            </a>
          </p>
        </section>
      </article>
    </Layout>
  )
}

export default injectIntl(HolidayBehindTheWheel)
