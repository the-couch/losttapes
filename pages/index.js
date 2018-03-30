import { Component } from 'react'
import 'isomorphic-fetch'
import contentfulAPI from '../api/contentful'
import FilmCard from 'cards/film'
import Layout from '../components/layout'

import Link from 'next/link'

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
    return films.map((film) => {
      if (film.fields.slug !== 'fucktards') {
        return (
          <FilmCard key={film.sys.id} {...film} />
        )
      }
    })
  }
  handleFeatured (films) {
    return films.map((film) => {
      if (film.fields.slug === 'fucktards') {
        return (
          <div className='fill-h film__card rel'>
            <Link prefetch href={`/film?title=${film.fields.slug}`}><a className='abs z5 fill fit'></a></Link>
            <h4 className='abs cw caps ls1'>{film.fields.title}</h4>
            <img className='fill-h' src={film.fields.cover.fields.file.url} />
          </div>
        )
      }
    })
  }
  render () {
    console.info("%c Built by https://thecouch.nyc", 'background: #021993; color: #fff')
    return (
      <Layout>
        <div className='px2'>
          <div className='pb2 home__featured rel'>{this.handleFeatured(this.props.films)}</div>
          <div className='block__header fill-h ac px1'><span className='ls1 caps'>Films</span></div>
          <div className='f jcb fw'>{this.handleFilms(this.props.films)}</div>
        </div>
      </Layout>
    )
  }
}
