import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'

import Layout from 'src/components/Layout'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'src/styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
        <Route to='/home' element={<Layout />} />
      </Routes>
    </Router> */}
    <Layout />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
