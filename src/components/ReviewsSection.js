import React from "react"
import { useIntl } from "gatsby-plugin-intl"
import Testimonial from "./Testimonial"
import "./reviews-section.css"

const REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=1161172875434720"

const ReviewsSection = () => {
  const intl = useIntl()
  const t = id => intl.formatMessage({ id: `home.reviews.${id}` })
  const quotes = [
    {
      message: intl.formatMessage({
        id: "home.testimonials.slide_content1.message",
      }),
      author: intl.formatMessage({
        id: "home.testimonials.slide_content1.author",
      }),
    },
    {
      message: intl.formatMessage({
        id: "home.testimonials.slide_content2.message",
      }),
      author: intl.formatMessage({
        id: "home.testimonials.slide_content2.author",
      }),
    },
  ]
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <p className="reviews-kicker">{t("kicker")}</p>
      <h2 id="reviews-title">{t("title")}</h2>
      <a
        className="reviews-badge"
        href={REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("badge_label")}
      >
        <span className="reviews-stars" aria-hidden="true">
          ★★★★★
        </span>
        <span>{t("badge_text")}</span>
      </a>
      <div className="reviews-grid">
        {quotes.map(q => (
          <Testimonial key={q.author} message={q.message} author={q.author} />
        ))}
      </div>
      <p className="reviews-cta">
        <a href={REVIEW_URL} target="_blank" rel="noopener noreferrer">
          {t("cta")}
        </a>
      </p>
    </section>
  )
}

export default ReviewsSection
