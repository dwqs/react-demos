import './index.less'

import React from 'react'
import { Link } from 'react-router-dom'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'Some React Demo:'
    }
  }

  render () {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <Link to='/react-demos/list'>An online demo to compare different impletation of virtual list</Link>(比较不同虚拟列表实现的 demo)
      </div>
    )
  }
}
