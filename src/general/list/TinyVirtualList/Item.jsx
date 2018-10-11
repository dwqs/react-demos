import React, { Component } from 'react'

import Image from '../Image'

export default class Item extends Component {
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
