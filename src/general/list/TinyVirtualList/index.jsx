import React from 'react'
import VirtualList from 'react-tiny-virtual-list'

import Image from '../Image'

import fakerData from '../fakerData'

/**
 * Reference:
 * https://github.com/clauderic/react-tiny-virtual-list
 */

export default class TinyVirtualList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: fakerData(),
      hasMore: true
    }

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem ({ index, style }) {
    const { id, image, words, paragraphs } = this.state.data[index]

    return (
      <div className='list-item' style={style} key={id}>
        <p>#{index} {words}</p>
        <Image src={image} alt={id} />
        <p>{paragraphs}</p>
      </div>
    )
  }

  render () {
    return (
      <VirtualList
        width='100%'
        height={750}
        itemSize={180}
        itemCount={this.state.data.length}
        estimatedItemSize={180}
        renderItem={this.renderItem}
      />
    )
  }
}
