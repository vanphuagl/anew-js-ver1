import React from 'react'
import { createRoot } from 'react-dom/client'
import { hydrate } from 'react-dom'
import reportWebVitals from './reportWebVitals'

import Layout from 'src/components/Layout'

import 'src/styles/styles.scss'

// import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<Layout />, rootElement)
  // hydrateRoot(rootElement, <Layout />)
} else {
  const root = createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  )
  // root.render(<Layout />)
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
