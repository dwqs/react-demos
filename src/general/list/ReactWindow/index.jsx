import React from 'react'
import { VariableSizeList as List } from 'react-window'

import Image from '../Image'

import fakerData from '../fakerData'

const data = fakerData()

/**
 * Reference:
 * https://react-window.now.sh/#/examples/list/variable-size
 */

// eslint-disable-next-line
const Row = ({ index, style }) => {
  const { id, image, words, paragraphs } = data[index]
  return (
    <div className='list-item' style={style} key={id}>
      <p>#{index} {words}</p>
      <Image src={image} alt={id} />
      <p>{paragraphs}</p>
    </div>
  )
}

const rowHeights = new Array(100)
  .fill(true)
  .map(() => {
    let random = Math.random()
    random = random >= 0.5 ? random : -random
    return 180 + random * 180
  })
const getItemSize = index => rowHeights[index]

export default class WindowList extends React.Component {
  render () {
    return (
      <List
        itemCount={data.length}
        estimatedItemSize={180}
        itemSize={getItemSize}
        height={750} width='100%'>
        {Row}
      </List>
    )
  }
}
