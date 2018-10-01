import React from 'react'
import ReactVirtualList from 'react-virtual-list'

import Image from '../Image'

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
        virtual.items.map((item, index) => {
          return (
            <div className='list-item' key={item.id} style={{ height: itemHeight }}>
              <p>#{index} {item.words}</p>
              <Image src={item.image} alt={item.id} />
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
        itemHeight={180}
      />
    )
  }
}
