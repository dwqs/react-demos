import React from 'react'
import ReactVirtualizedList from '@dwqs/react-virtual-list'

import { LoadingComponent, EndingComponent } from '../components'
import Image from '../Image'

import fakerData from '../fakerData'

/**
 * Reference:
 * https://github.com/dwqs/react-virtual-list
 */

export default class VirtualizedList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: fakerData(),
      hasMore: true
    }

    this.renderItem = this.renderItem.bind(this)
    this.loadNextPage = this.loadNextPage.bind(this)
  }

  renderItem (item, index) {
    const { id, image, words, paragraphs } = item
    return (
      <div className='list-item'>
        <p>#{index} {words}</p>
        <Image src={image} alt={id} />
        <p>{paragraphs}</p>
      </div>
    )
  }

  loadNextPage () {
    const data = [].concat(this.state.data, fakerData(this.state.data.length))
    setTimeout(() => {
      this.setState({
        data,
        hasMore: data.length < 300
      })
    }, 2000)
  }

  render () {
    return (
      <ReactVirtualizedList
        uniqueField='id'
        hasMore={this.state.hasMore}
        data={this.state.data}
        estimatedItemHeight={180}
        loadingComponent={<LoadingComponent />}
        endComponent={<EndingComponent />}
        onReachedBottom={this.loadNextPage}
        renderItem={this.renderItem}
      />
    )
  }
}
