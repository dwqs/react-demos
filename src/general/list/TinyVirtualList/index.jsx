import '../../virtual-list/index.less'

import React from 'react'
import VirtualList from 'react-tiny-virtual-list'

import Item from './Item'

import fakerData from '../fakerData'

const estimatedItemSize = 135
const bufferSize = 3

/**
 * Reference:
 * https://github.com/clauderic/react-tiny-virtual-list
 */

export default class TinyVirtualList extends React.Component {
  constructor (props) {
    super(props)
    this.data = fakerData(0, false)
    this.cacheHeight = Object.create(null)

    this.renderItem = this.renderItem.bind(this)
    this.getItemSize = this.getItemSize.bind(this)
  }

  renderItem ({ index, style }) {
    const item = this.data[index]

    return (
      <Item
        key={item.id}
        index={index}
        item={item}
        style={style}
      />
    )
  }

  getItemSize (index) {
    let random = Math.random()
    random = random >= 0.5 ? random : -random
    return estimatedItemSize + random * estimatedItemSize
  }

  componentDidMount () {
    this.list.recomputeSizes()
    this.list.forceUpdate()
  }

  render () {
    return (
      <VirtualList
        width='100%'
        ref={node => { this.list = node }}
        height={750}
        itemSize={this.getItemSize}
        itemCount={this.data.length}
        renderItem={this.renderItem}
        overscanCount={bufferSize}
      />
    )
  }
}
