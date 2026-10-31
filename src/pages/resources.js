import React from "react"
import { injectIntl } from "gatsby-plugin-intl"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./resources.css"

const copy = {
  en: {
    eyebrow: "For our students",
    title: "Community Resources",
    description:
      "Local businesses and services our students ask about — everything in one place.",
    disclaimer:
      "These businesses are listed for your convenience. Abigail's Driving School does not endorse any provider and is not responsible for their services. Some listings are referral partners, and Abigail's Driving School may receive compensation when you use their links or QR codes.",
    sections: [
      {
        id: "lawyers",
        heading: "Lawyers",
        blurb: "Traffic attorneys and legal help in the Richmond area.",
        listings: [
          {
            name: "Sample Law Firm",
            phone: "(804) 555-0100",
            url: "https://example.com",
            note: "Example listing — replace with your referral.",
            sample: true,
          },
          {
            name: "Sample Traffic Attorney",
            phone: "(804) 555-0101",
            url: "https://example.com",
            note: "Example listing — replace with your referral.",
            sample: true,
          },
        ],
      },
      {
        id: "insurance",
        heading: "Insurance Companies",
        blurb: "Auto insurance for new drivers and their families.",
        listings: [
          {
            name: "Erica Johnson — Farmers Insurance",
            phone: "(804) 953-5048",
            url: "https://secure.shoppingforquotes.com/qr/y2fxfMk9PJ8L",
            qr: "/erica-johnson-qr.svg",
            quote: true,
            note: "Insurance broker powered by Farmers Insurance — 10+ auto companies to quote you, 12+ years of experience. Office: (804) 707-5018 · 2820 Waterford Lake Dr Suite 203, Midlothian, VA 23112.",
          },
        ],
      },
      {
        id: "dealers",
        heading: "Car Dealers",
        blurb: "Where to shop for your first car in the Richmond area.",
        listings: [
          {
            name: "Sample Auto Dealer",
            phone: "(804) 555-0104",
            url: "https://example.com",
            note: "Example listing — replace with your referral.",
            sample: true,
          },
          {
            name: "Sample Car Lot",
            phone: "(804) 555-0105",
            url: "https://example.com",
            note: "Example listing — replace with your referral.",
            sample: true,
          },
        ],
      },
    ],
    sampleBadge: "Sample",
    visitWebsite: "Visit website",
    quoteCta: "Get an insurance quote",
    qrCaption: "Scan to get a quote",
    qrAlt: "QR code linking to Erica Johnson's insurance quote page",
    call: "Call",
    suggestTitle: "Know a business we should list?",
    suggestText:
      "Tell us about a lawyer, insurance company, or car dealer you trust and we will consider adding them here.",
    suggestCta: "Email us your suggestion",
  },
  es: {
    eyebrow: "Para nuestros estudiantes",
    title: "Recursos comunitarios",
    description:
      "Negocios y servicios locales que nuestros estudiantes nos piden — todo en un solo lugar.",
    disclaimer:
      "Estos negocios se listan para su conveniencia. Abigail's Driving School no respalda a ningún proveedor y no es responsable de sus servicios. Algunos negocios listados son socios de referidos, y Abigail's Driving School puede recibir una compensación cuando usted usa sus enlaces o códigos QR.",
    sections: [
      {
        id: "lawyers",
        heading: "Abogados",
        blurb: "Abogados de tráfico y ayuda legal en el área de Richmond.",
        listings: [
          {
            name: "Firma de abogados (ejemplo)",
            phone: "(804) 555-0100",
            url: "https://example.com",
            note: "Listado de ejemplo — reemplácelo con su referido.",
            sample: true,
          },
          {
            name: "Abogado de tráfico (ejemplo)",
            phone: "(804) 555-0101",
            url: "https://example.com",
            note: "Listado de ejemplo — reemplácelo con su referido.",
            sample: true,
          },
        ],
      },
      {
        id: "insurance",
        heading: "Compañías de seguros",
        blurb: "Seguro de auto para conductores nuevos y sus familias.",
        listings: [
          {
            name: "Erica Johnson — Farmers Insurance",
            phone: "(804) 953-5048",
            url: "https://secure.shoppingforquotes.com/qr/y2fxfMk9PJ8L",
            qr: "/erica-johnson-qr.svg",
            quote: true,
            note: "Corredora de seguros con Farmers Insurance — más de 10 compañías de autos para cotizarle y más de 12 años de experiencia. Oficina: (804) 707-5018 · 2820 Waterford Lake Dr Suite 203, Midlothian, VA 23112.",
          },
        ],
      },
      {
        id: "dealers",
        heading: "Concesionarios de autos",
        blurb: "Dónde buscar su primer auto en el área de Richmond.",
        listings: [
          {
            name: "Concesionario (ejemplo)",
            phone: "(804) 555-0104",
            url: "https://example.com",
            note: "Listado de ejemplo — reemplácelo con su referido.",
            sample: true,
          },
          {
            name: "Lote de autos (ejemplo)",
            phone: "(804) 555-0105",
            url: "https://example.com",
            note: "Listado de ejemplo — reemplácelo con su referido.",
            sample: true,
          },
        ],
      },
    ],
    sampleBadge: "Ejemplo",
    visitWebsite: "Visitar sitio web",
    quoteCta: "Obtén una cotización de seguro",
    qrCaption: "Escanea para cotizar",
    qrAlt: "Código QR al sitio de cotizaciones de Erica Johnson",
    call: "Llamar",
    suggestTitle: "¿Conoce un negocio que deberíamos incluir?",
    suggestText:
      "Cuéntenos sobre un abogado, compañía de seguros o concesionario de su confianza y consideraremos agregarlo aquí.",
    suggestCta: "Envíenos su sugerencia",
  },
}

const Resources = ({ intl }) => {
  const isSpanish = intl.locale === "es"
  const labels = isSpanish ? copy.es : copy.en

  return (
    <Layout>
      <SEO
        lang={intl.locale}
        title={labels.title}
        description={labels.description}
      />
      <article className="resources-page" aria-labelledby="resources-title">
        <header className="resources-heading">
          <p className="resources-eyebrow">{labels.eyebrow}</p>
          <h1 id="resources-title">{labels.title}</h1>
          <p className="resources-intro">{labels.description}</p>
          <p className="resources-disclaimer">{labels.disclaimer}</p>
        </header>

        {labels.sections
          .filter(section => section.listings.some(listing => !listing.sample))
          .map(section => (
          <section
            key={section.id}
            id={`resources-${section.id}`}
            className="resource-section"
            aria-labelledby={`resources-${section.id}-title`}
          >
            <h2 id={`resources-${section.id}-title`}>{section.heading}</h2>
            <p className="resource-blurb">{section.blurb}</p>
            <div className="resource-cards">
              {section.listings.map(listing => (
                <div className="resource-card" key={listing.name}>
                  <div className="resource-card-top">
                    <h3>{listing.name}</h3>
                    {listing.sample && (
                      <span className="resource-sample-badge">
                        {labels.sampleBadge}
                      </span>
                    )}
                  </div>
                  <p className="resource-note">{listing.note}</p>
                  {listing.qr && (
                    <div className="resource-qr">
                      <img src={listing.qr} alt={labels.qrAlt} width="140" height="140" />
                      <span>{labels.qrCaption}</span>
                    </div>
                  )}
                  <div className="resource-links">
                    <a href={`tel:${listing.phone}`}>{listing.phone}</a>
                    {listing.url && listing.quote && (
                      <a
                        className="resource-quote-btn"
                        href={listing.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {labels.quoteCta}
                      </a>
                    )}
                    {listing.url && !listing.quote && (
                      <a
                        href={listing.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {labels.visitWebsite}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        <aside className="resources-suggest" aria-labelledby="resources-suggest-title">
          <h2 id="resources-suggest-title">{labels.suggestTitle}</h2>
          <p>{labels.suggestText}</p>
          <a
            className="resources-cta"
            href="mailto:abigailsinstructor@gmail.com"
          >
            {labels.suggestCta}
          </a>
        </aside>
      </article>
    </Layout>
  )
}

export default injectIntl(Resources)
