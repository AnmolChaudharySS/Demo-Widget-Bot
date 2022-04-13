//Google Tag Manager
const initializeTagManager = (w, d, s, l, i) => {
  w[l] = w[l] || []
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
  const f = d.getElementsByTagName(s)[0]
  const j = d.createElement(s)
  const dl = l !== 'dataLayer' ? `&l=${l}` : ''
  j.async = true
  j.src = `https://www.googletagmanager.com/gtm.js?id=${i}${dl}`
  f.parentNode.insertBefore(j, f)
}
//config
const GTM_ID = 'GTM-KLLJV7S'
initializeTagManager(window, document, 'script', 'dataLayer', GTM_ID)