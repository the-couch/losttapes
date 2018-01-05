import { Component } from 'react'
import Layout from 'components/layout'
import 'isomorphic-fetch'
import contentfulAPI from 'api/contentful'

export default class extends Component {
  static async getInitialProps ({query}) {
    const response = await contentfulAPI.getEntries({
      content_type: 'film',
      'fields.slug': query.title,
      include: 6
    })
    return {
      film: response.items[0]
    }
  }
  render () {
    const {
      title,
      releasedAt
    } = this.props.film.fields
    return (
      <Layout>
        <h3>{title}</h3>
      </Layout>
    )
  }
}