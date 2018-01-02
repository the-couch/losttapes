import { Component } from 'react'

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      foo: 'bar'
    }
  }
  render () {
    return (
      <div>Hey guys</div>
    )
  }
}