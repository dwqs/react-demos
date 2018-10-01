import React from 'react'
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized'

import Image from '../Image'

import fakerData from '../fakerData'

// const rowHeights = new Array(100)
//   .fill(true)
//   .map(() => 180 + Math.round(Math.random() * 50))
// const getItemSize = ({ index }) => rowHeights[index]
/**
 * Reference:
 * https://blog.logrocket.com/rendering-large-lists-with-react-virtualized-82741907a6b3
 * https://github.com/bvaughn/react-virtualized/blob/master/source/List/List.example.js
 */
export default class ReactVirtualizedList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: fakerData(),
      hasMore: true
    }

    this.cache = new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 180
    })

    this.renderItem = this.renderItem.bind(this)
  }

  renderItem ({ index, key, style, parent }) {
    const { id, image, words, paragraphs } = this.state.data[index]
    return (
      <CellMeasurer
        key={key}
        cache={this.cache}
        parent={parent}
        columnIndex={0}
        rowIndex={index}
      >
        <div className='list-item' style={style}>
          <p>#{index} {words}</p>
          <Image src={image} alt={id} />
          <p>{paragraphs}</p>
        </div>
      </CellMeasurer>
    )
  }

  render () {
    return (
      <AutoSizer disableHeight>
        {
          ({ width }) => (
            <List
              width={width}
              height={750}
              deferredMeasurementCache={this.cache}
              rowRenderer={this.renderItem}
              overscanRowCount={3}
              estimatedRowSize={180}
              // rowHeight={getItemSize}
              rowHeight={this.cache.rowHeight}
              rowCount={this.state.data.length}
            />
          )
        }
      </AutoSizer>
    )
  }
}
