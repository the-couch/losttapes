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

    console.info("%c Built by https://thecouch.nyc", 'background: #021993; color: #fff')
    return (
      <Layout>
        <div className='px2'>
          <div className='block__header fill-h ac px1'><span className='ls1 caps'>Films</span></div>
          <div className='f jcb fw'>{this.handleFilms(this.props.films)}</div>
        </div>
      </Layout>
    )
  }
}
