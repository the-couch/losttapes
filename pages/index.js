import { Component } from 'react'
import 'isomorphic-fetch'
import contentfulAPI from '../api/contentful'
import FilmCard from 'cards/film'
import Layout from '../components/layout'


export default class extends Component {
  static async getInitialProps () {
    const response = await contentfulAPI.getEntries({
      content_type: 'film',
      include: 8
    })
    return {
      films: response.items
    }
  }
  handleFilms (films) {
    return films.map((film) => (
      <FilmCard key={film.sys.id} {...film}  />
    ))
  }
  render () {
    return (
      <Layout>
        <style jsx>{`
          .film-header {
            margin: 40px 0 40px;
          }
        `}</style>
        <div>
          <h1>the lost tapes.</h1>
          <p>a place for skateboarding to survice after the vhs</p>
        </div>
        <div className='film-header'><p className='italic caps'>Films</p></div>
        <div className='f jcb fw'>{this.handleFilms(this.props.films)}</div>
      </Layout>
    )
  }
}
