import React, { Component } from 'react'

import Image from '../Image'

export default class Item extends Component {
  componentDidMount () {
    /* eslint-disable-next-line */
    this.props.cacheNodeHeight(this.node, this.props.index)
  }

  render () {
    /* eslint-disable-next-line */
    const {index, item, style} = this.props

    return (
      <div className='list-item' style={style} ref={node => { this.node = node }}>
        <p>#${index} {item.words}</p>
        { item.image ? <Image src={item.image} alt={item.id} /> : null}
        <p>{item.paragraphs}</p>
      </div>
    )
  }
}
