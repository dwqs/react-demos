import 'normalize.css'
import '@babel/polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import APP from './app'
const mountNode = document.getElementById('app')

const render = (APP) => {
  ReactDOM.render(
    <APP />,
    mountNode
  )
}

render(APP)

if (module.hot) {
  module.hot.accept('./app', () => { render(APP) })
}
