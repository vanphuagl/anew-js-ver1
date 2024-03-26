import React from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import Layout from 'src/components/Layout'

import 'src/styles/styles.scss'

// import ReactDOM from 'react-dom/client'
// import { hydrate, render } from 'react-dom'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, <Layout />)
  // hydrate(<Layout />, rootElement);
} else {
  const root = createRoot(rootElement)
  root.render(<Layout />)
  // render(<Layout />, rootElement)
}

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//   <React.StrictMode>
//     <Layout />
//   </React.StrictMode>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
