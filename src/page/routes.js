
import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

const Loading = () => {
  return (
    <div>Loading</div>
  )
}

const createContainer = loader => Loadable({
  loading: Loading,
  loader
})

const App = () => import(/* webpackChunkName: "main" */ '../general/app/index')
const List = () => import(/* webpackChunkName: "list" */ '../general/list/index')
const Dom = () => import(/* webpackChunkName: "dom" */ '../general/dom/index')
const Virtual = () => import(/* webpackChunkName: "virtual" */ '../general/virtual-list/index')

const routes =
  <Switch>
    <Route exact path='/react-demos' component={createContainer(App)} />
    <Route path='/react-demos/list' component={createContainer(List)} />
    <Route path='/react-demos/dom' component={createContainer(Dom)} />
    <Route path='/react-demos/virtual' component={createContainer(Virtual)} />
  </Switch>

export default routes
