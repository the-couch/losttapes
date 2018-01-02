import { Component } from 'react'
import contentfulAPI from '../api/contentful'

export default class extends Component {
  constructor (props) {
    super(props)

    this.state = {
      foo: 'bar'
    }
  }
  componentWillMount () {

  }
  render () {
    return (
      <div>Hey guys</div>
    )
  }
}
