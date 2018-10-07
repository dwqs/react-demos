import './index.less'

import React, { Component } from 'react'
import Item from './Item'

const height = 60
const bufferSize = 5

export default class VirtualizedList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      startOffset: 0,
      endOffset: 0,
      visibleData: []
    }

    this.data = new Array(1000).fill(true)

    this.startIndex = 0
    this.endIndex = 0
    this.scrollTop = 0

    this.doc = null
    this.cache = []
    this.anchorItem = {
      index: 0,
      top: 0,
      bottom: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.cachePosition = this.cachePosition.bind(this)
  }

  cachePosition (node, index) {
    if (!node) {
      return
    }

    const rect = node.getBoundingClientRect()
    const top = rect.top + window.pageYOffset

    this.cache.push({
      index,
      top,
      bottom: top + rect.height
    })
  }

  handleScroll (e) {
    if (!this.doc) {
      // 兼容 iOS Safari/Webview
      this.doc = window.document.body.scrollTop ? window.document.body : window.document.documentElement
    }

    const scrollTop = this.doc.scrollTop
    if (scrollTop > this.scrollTop) {
      if (scrollTop > this.anchorItem.bottom) {
        this.updateBoundaryIndex(scrollTop)
        this.updateVisibleData()
      }
    } else if (scrollTop < this.scrollTop) {
      if (scrollTop < this.anchorItem.top) {
        this.updateBoundaryIndex(scrollTop)
        this.updateVisibleData()
      }
    }

    this.scrollTop = scrollTop
  }

  updateBoundaryIndex (scrollTop) {
    scrollTop = scrollTop || 0

    const anchorItem = this.cache.find(item => item.bottom >= scrollTop)

    if (!anchorItem) {
      return
    }

    this.anchorItem = {
      ...anchorItem
    }

    this.startIndex = this.anchorItem.index
    this.endIndex = this.startIndex + this.visibleCount
  }

  updateVisibleData () {
    const visibleData = this.data.slice(this.startIndex, this.endIndex)

    this.setState({
      startOffset: this.anchorItem.top,
      endOffset: (this.data.length - this.endIndex) * height,
      visibleData
    })
  }

  componentDidMount () {
    // 计算可渲染的元素个数
    this.visibleCount = Math.ceil(window.innerHeight / height) + bufferSize
    this.endIndex = this.startIndex + this.visibleCount
    this.updateVisibleData()

    window.addEventListener('scroll', this.handleScroll, false)
  }

  render () {
    const { startOffset, endOffset, visibleData } = this.state

    return (
      <div className='wrapper' ref={node => { this.wrapper = node }}>
        <div style={{ paddingTop: `${startOffset}px`, paddingBottom: `${endOffset}px` }}>
          {
            visibleData.map((item, index) => {
              return (
                <Item
                  cachePosition={this.cachePosition}
                  key={this.startIndex + index}
                  index={this.startIndex + index}
                />
              )
            })
          }
        </div>
      </div>
    )
  }
}
