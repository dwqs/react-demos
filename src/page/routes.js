
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

const routes =
  <Switch>
    <Route exact path='/' component={createContainer(App)} />
    <Route path='/list' component={createContainer(List)} />
  </Switch>

export default routes
