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
      <div className='doc'>
        <h3>{this.state.title}</h3>
        <Link to='/react-demos/list'>An online demo to compare different impletation of virtual list</Link>(比较不同虚拟列表实现的 demo)
        <br />
        <Link to='/react-demos/dom'>DOMs</Link>(创建 DOM 元素的测试)
        <br />
        <Link to='/react-demos/virtual'>The virtual list whose item has the same height</Link>(列表项等高的虚拟列表 demo)
        <br />
        <Link to='/react-demos/dynamic'>The virtual list whose item has dynamic height</Link>(列表项不等高的虚拟列表 demo)
      </div>
    )
  }
}
