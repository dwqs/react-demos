import React, { Component } from 'react'

export default class Item extends Component {
  componentDidMount () {
    /* eslint-disable-next-line */
    this.props.cachePosition(this.node, this.props.index)
  }

  render () {
    /* eslint-disable-next-line */
    const {index, item} = this.props

    return (
      <div className='list-item' style={{ height: 'auto' }} ref={node => { this.node = node }}>
        <p>#${index} {item.words}</p>
        <p>{item.paragraphs}</p>
      </div>
    )
  }
}
