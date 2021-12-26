import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import './i18n'
import { Suspense } from 'react'

ReactDOM.render(
  <Suspense fallback="...is loading">
    <App />
  </Suspense>,
  document.getElementById('root')
)
