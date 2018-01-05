import { Component } from 'react'
import Layout from 'components/layout'

export default class extends Component {
  render () {
    console.log('sup film', this)
    return (
      <Layout>
        <h3>Taco</h3>
      </Layout>
    )
  }
}