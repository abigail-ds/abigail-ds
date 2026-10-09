// Track intent without sending customer names, numbers, or query strings.
export const onClientEntry = () => {
  const measurementId = process.env.GATSBY_GA_MEASUREMENT_ID
  if (/^G-[A-Z0-9]+$/.test(measurementId || "")) {
    window.dataLayer = window.dataLayer || []
    window.gtag = function() { window.dataLayer.push(arguments) }
    window.gtag("js", new Date())
    window.gtag("config", measurementId, { send_page_view: false })
    const script = document.createElement("script")
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
    document.head.appendChild(script)
  }
  document.addEventListener("click", event => {
    const link = event.target.closest && event.target.closest("a[href]")
    if (!link) return
    const url = new URL(link.href, window.location.href)
    let name
    if (url.protocol === "tel:") name = "call_click"
    else if (url.protocol === "sms:") name = "text_click"
    else if (url.hostname.endsWith(".setmore.com")) name = "booking_click"
    else if (link.classList.contains("course-enroll-button") || link.classList.contains("popular-course-enroll")) name = "course_enrollment_click"
    else if (link.classList.contains("course-learn-button")) name = "course_details_click"
    if (!name) return
    const parameters = {
      page_path: window.location.pathname,
      language: window.location.pathname.startsWith("/es/") ? "es" : "en",
      destination: ["https:", "http:"].includes(url.protocol) ? url.hostname + url.pathname : url.protocol,
      transport_type: "beacon",
    }
    if (typeof window.gtag === "function") window.gtag("event", name, parameters)
    else {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: name, ...parameters })
    }
  })
}

export const onRouteUpdate = () => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: window.location.pathname,
      page_location: window.location.origin + window.location.pathname,
    })
  }
}
