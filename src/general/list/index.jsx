import './index.less'

import React from 'react'

import VirtualizedList from './VirtualizedList/index'
import ReactVirtualList from './ReactVirtualList/index'
import TinyVirtualList from './TinyVirtualList/index'
import WindowList from './ReactWindow/index'
import ReactVirtualizedList from './ReactVirtualizedList/index'

export default class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked0: true,
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      active: '0'
    }

    this.change = this.change.bind(this)
  }

  change (e) {
    this.setState({
      active: e.target.value
    })
  }

  getList () {
    switch (this.state.active) {
      case '0':
        return <VirtualizedList />
      case '1':
        return <ReactVirtualList />
      case '2':
        return <TinyVirtualList />
      case '3':
        return <ReactVirtualizedList />
      case '4':
        return <WindowList />
    }
  }

  render () {
    return (
      <div>
        <h3 style={{ marginLeft: '20px' }}>Select the impletation of virtual list：</h3>
        <p className='selection'>
          <label htmlFor='0'>
            <input type='radio' checked={this.state.active === '0'} value='0' id='0' onChange={this.change} />
            <a href='https://github.com/dwqs/react-virtual-list' target='_blank' rel='noopener noreferrer'>VirtualizedList</a>
          </label>
          <label htmlFor='2'>
            <input type='radio' checked={this.state.active === '2'} value='2' id='2' onChange={this.change} />
            <a href='https://github.com/clauderic/react-tiny-virtual-list' target='_blank' rel='noopener noreferrer'>TinyVirtualList</a>
          </label>
          <label htmlFor='4'>
            <input type='radio' checked={this.state.active === '4'} value='4' id='4' onChange={this.change} />
            <a href='https://github.com/bvaughn/react-window' target='_blank' rel='noopener noreferrer'>ReactWindow</a>
          </label>
          <label htmlFor='1'>
            <input type='radio' checked={this.state.active === '1'} value='1' id='1' onChange={this.change} />
            <a href='https://github.com/developerdizzle/react-virtual-list' target='_blank' rel='noopener noreferrer'>ReactVirtualList</a>
          </label>
          <label htmlFor='3'>
            <input type='radio' checked={this.state.active === '3'} value='3' id='3' onChange={this.change} />
            <a href='https://github.com/bvaughn/react-virtualized' target='_blank' rel='noopener noreferrer'>ReactVirtualized</a>
          </label>
        </p>
        <div className='list-container' id='list-container'>
          {this.getList()}
        </div>
      </div>
    )
  }
}
