import React from 'react'
import ReactVirtualList from 'react-virtual-list'

import fakerData from '../fakerData'

/**
 * Reference:
 * https://github.com/developerdizzle/react-virtual-list
 */

// eslint-disable-next-line
const MyList = ({ virtual, itemHeight }) => {
  return (
    <div style={virtual.style}>
      {
        virtual.items.map((item) => {
          return (
            <div className='list-item' key={item.id} style={{ height: itemHeight }}>
              <p>#{item.id} {item.words}</p>
              <p>{item.paragraphs}</p>
            </div>
          )
        })
      }
    </div>
  )
}

const MyVirtualList = ReactVirtualList()(MyList)

export default class VirtualList extends React.Component {
  render () {
    return (
      <MyVirtualList
        items={fakerData()}
        itemHeight={135}
      />
    )
  }
}
