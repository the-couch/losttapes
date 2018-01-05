import { Component } from 'react'
import 'isomorphic-fetch'
import contentfulAPI from '../api/contentful'
import FilmCard from '../components/cards/film'
import Layout from '../components/layout'
import marked from 'marked'

export default class extends Component {
  static async getInitialProps () {
    const response = await contentfulAPI.getEntries({
      content_type: 'notes',
      include: 8
    })
    return {
      page: response.items[0]
    }
  }
  render () {
    return (
      <Layout>
        <div>
          <h1>Notes</h1>
          <div dangerouslySetInnerHTML={{__html: marked(this.props.page.fields.description)}} />
        </div>
      </Layout>
    )
  }
}
