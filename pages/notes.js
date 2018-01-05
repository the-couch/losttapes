import { Component } from 'react'
import 'isomorphic-fetch'
import contentfulAPI from '../api/contentful'
import FilmCard from '../components/cards/film'
import Layout from '../components/layout'

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
    console.log(this.props)
    return (
      <Layout>
        <style jsx>{`
        `}</style>
        <div>
          <h1>Notes</h1>
          <p>a place for skateboarding to survice after the vhs</p>
        </div>
      </Layout>
    )
  }
}
