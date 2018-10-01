import React from 'react'
import { Router } from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'

import routes from './routes'

const history = createBrowserHistory()

const APP = () => {
  return (
    <Router history={history}>
      { routes }
    </Router>
  )
}

export default APP
