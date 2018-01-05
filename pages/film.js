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
      releasedAt,
      company,
      videoUrl
    } = this.props.film.fields

    console.log('yo', this.props.film)
    return (
      <Layout>
        <h3>{title}</h3>
        {company && (<h5>{company.fields.name}</h5>)}
        {videoUrl && (
          <video src={videoUrl} controls />
        )}
      </Layout>
    )
  }
}