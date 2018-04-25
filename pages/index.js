import { Component } from 'react'
import 'isomorphic-fetch'
import contentfulAPI from '../api/contentful'
import FilmCard from 'cards/film'
import Layout from '../components/layout'
import ReactGA from 'react-ga'

import Link from 'next/link'

const initGA = () => {
  ReactGA.initialize('UA-116652491-1')
}
const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}

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
  constructor (props) {
    super(props)
    this.state = {
      films: props.films,
      sortState: [],
      name: false,
      date: false,
      company: false
    }
  }
  componentDidMount () {
    initGA()
    logPageView()
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
        const background = {
          backgroundImage: 'url(' + film.fields.cover.fields.file.url + ')'
        }
        return (
          <div key={Math.random()} className='fill-h film__card rel' style={background}>
            <Link prefetch href={`/film?title=${film.fields.slug}`}><a className='abs z5 fill fit'></a></Link>
            <h4 className='abs cw caps ls1 z6'>{film.fields.title}</h4>
            <img className='fill-h' src={film.fields.cover.fields.file.url} />
          </div>
        )
      }
    })
  }
  updateFiltering (filter) {
    let order = ''
    filter.forEach((item, i) => {
      if (filter.length === i + 1) {
        order += item
      } else {
        order += item + ','
      }
    })
    const response = contentfulAPI.getEntries({
      content_type: 'film',
      include: 8,
      order: order
    })
    response.then(res => {

      this.setState({
        films: res.items
      })
    })
  }
  handleSortingName () {
    let { sortState, name } = this.state
    if (!name) {
      sortState.push('fields.title')
      this.setState({name: !name})
    } else {
      sortState = sortState.filter((l) => {
        console.log('L', l)
        return l !== 'fields.title'
      })
      this.setState({name: !name})
    }
    this.setState({
      sortState: sortState
    })
    this.updateFiltering(sortState)
  }
  render () {
    console.info("%c Built by https://thecouch.nyc", 'background: #021993; color: #fff')
    return (
      <Layout>
        <div className='px2'>
          <div className='pb2 home__featured rel'>{this.handleFeatured(this.props.films)}</div>
          <div className='block__header fill-h ac px05 small'><span className='ls1 caps'>Films</span></div>
          <div className='block__sort px05 small ar' onClick={() => this.handleSortingName()}>title: {this.state.name ? '~' : '?'}</div>
          <div className='f jcb fw'>{this.handleFilms(this.state.films)}</div>
        </div>
      </Layout>
    )
  }
}
