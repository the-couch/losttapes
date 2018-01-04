import { Component } from 'react'
import 'isomorphic-fetch'
import contentfulAPI from '../api/contentful'
import FilmCard from '../components/cards/film'
import Layout from '../components/layout'
import { Flex, Box } from 'ffx'

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
      <Box key={film.sys.id} width={[1, [500, 1/2], [900, 1/4]]}>
        <FilmCard {...film}  />
      </Box>
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
        <Flex wrap>{this.handleFilms(this.props.films)}</Flex>
      </Layout>
    )
  }
}
