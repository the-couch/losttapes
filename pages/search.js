import { Component } from 'react'
import 'isomorphic-fetch'
import contentfulAPI from '../api/contentful'
import FilmCard from '../components/cards/film'
import Layout from '../components/layout'
import marked from 'marked'

export default class extends Component {
  static async getInitialProps ({ query }) {
    const response = await contentfulAPI.getEntries({
      content_type: 'film',
      'query': query.title,
      include: 10
    })
    return {
      films: response.items,
      query: query.title
    }
  }
  handleFilms (films) {
    return films.map((film) => {
      return (
        <FilmCard key={film.sys.id} {...film} />
      )
    })
  }
  render () {
    console.log('propy', this.props)
    return (
      <Layout>
        <div className='px2'>
          <h4>Search for: {this.props.query}</h4>
          <div>
            <div className='f jcb fw'>{this.handleFilms(this.props.films)}</div>
          </div>
        </div>
      </Layout>
    )
  }
}
