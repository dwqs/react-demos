
import React from 'react'

const count = 10000

function createMarkup (doms) {
  return doms.length ? { __html: doms.join(' ') } : { __html: '' }
}

export default class DOM extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      simpleDOMs: [],
      complexDOMs: []
    }

    this.onCreateSimpleDOMs = this.onCreateSimpleDOMs.bind(this)
    this.onCreateComplexDOMs = this.onCreateComplexDOMs.bind(this)
  }

  onCreateSimpleDOMs () {
    const array = []

    for (var i = 0; i < count; i++) {
      array.push('<div>' + i + '</div>')
    }

    this.setState({
      simpleDOMs: array,
      complexDOMs: []
    })
  }

  onCreateComplexDOMs () {
    const array = []
    for (var i = 0; i < count; i++) {
      array.push(`
        <div class='list-item'>
          <p>#${i} eligendi voluptatem quisquam</p>
          <p>Modi autem fugiat maiores. Doloremque est sed quis qui nobis. Accusamus dolorem aspernatur sed rem.</p>
        </div>
      `)
    }

    this.setState({
      complexDOMs: array
    })
  }

  render () {
    return (
      <div style={{ marginLeft: '10px' }}>
        <h3>Creat large of DOMs：</h3>
        <button onClick={this.onCreateSimpleDOMs}>Create Simple DOMs</button>
        <button onClick={this.onCreateComplexDOMs} style={{ marginLeft: '10px' }}>Create Complex DOMs</button>
        <div dangerouslySetInnerHTML={createMarkup(this.state.simpleDOMs)} />
        <div dangerouslySetInnerHTML={createMarkup(this.state.complexDOMs)} />
      </div>
    )
  }
}
