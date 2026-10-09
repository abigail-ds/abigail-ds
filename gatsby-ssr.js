const React = require("react")

exports.onRenderBody = ({ setHeadComponents }) => {
  const id = process.env.GATSBY_GA_MEASUREMENT_ID || "G-KT6NT6VN1X"
  if (!/^G-[A-Z0-9]+$/.test(id)) return
  setHeadComponents([
    React.createElement("script", {
      key: "google-analytics-loader",
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${id}`,
    }),
    React.createElement("script", {
      key: "google-analytics-config",
      dangerouslySetInnerHTML: {
        __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{page_location:window.location.origin+window.location.pathname});`,
      },
    }),
  ])
}
