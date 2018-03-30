import { Component } from 'react'
import Layout from 'components/layout'
import 'isomorphic-fetch'
import contentfulAPI from 'api/contentful'
import cx from 'classnames'
import FilmCard from 'cards/film'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activePart: 0,
      videos: [],
      showContents: false
    }
  }
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
  watchVideo () {
    if (this.props.film.fields.parts) {
      const videoDom = document.getElementById(this.props.film.fields.parts[this.state.activePart].sys.id)
      videoDom.addEventListener('ended', () => {
        if (this.state.activePart < this.props.film.fields.parts.length) {
          this.setState({
            activePart: this.state.activePart + 1
          })
        }
      })
    }
  }
  componentDidMount () {
    this.watchVideo()
  }
  componentWillMount () {
    const self = this
    const moreVideos = contentfulAPI.getEntries({
      content_type: 'film',
      include: 8,
      limit: 4
    })
    moreVideos.then((res) => {
      self.setState({
        videos: res.items
      })
    })
  }
  componentWillUpdate () {
    setTimeout(() => {

      const videoDom = document.getElementById(this.props.film.fields.parts[this.state.activePart].sys.id)
      videoDom.play()
    }, 200)
  }
  handleVideoParts (parts) {
    const activePart = parts[this.state.activePart]
    return (
      <div>
        <video id={activePart.sys.id} controls src={activePart.fields.videoUrl} />
        <h5>{activePart.fields.name}</h5>
      </div>
    )
  }
  updateVideo (i) {
    this.setState({
      activePart: i,
      playing: true
    })
  }
  displayAllParts (parts) {
    return parts.map((part, i) => {
      return (
        <div key={part.sys.id} onClick={() => this.updateVideo(i)} className={`part__link ${this.state.activePart === i ? 'active' : null}`}>{part.fields.name}</div>
      )
    })
  }
  handleFilms (films) {
    return films.map((film) => (
      <FilmCard key={film.sys.id} {...film}  />
    ))
  }
  render () {
    const {
      title,
      releasedAt,
      company,
      videoUrl,
      parts
    } = this.props.film.fields

    const {
      showContents
    } = this.state

    return (
      <Layout type={`film`}>
        <div className='video__single px2'>
          <div className='f jcb'>
            <div className='video__window rel'>
              {videoUrl && (
                <video src={videoUrl} controls />
              )}
              {parts && (
                <div>{this.handleVideoParts(parts)}</div>
              )}

              <div className={cx('al px2 video__parts abs right bottom', {
                'show': showContents
              })}>
              <div onClick={() => this.setState({ showContents: false })} className='video__parts_close abs right top'>x</div>
              <h5 className='caps'>Chapters</h5>
                {parts && this.displayAllParts(parts)}
              </div>
              {parts && (
                <div onClick={() => this.setState({ showContents: !showContents })} className='abs bottom right f jcc aic video__part_toggle'>
                  <span className='lines' />
                </div>
              )}
            </div>
          </div>
          <div className=''>
            <h2>{title}</h2>
            {company && (<h5>{company.fields.name}</h5>)}
          </div>
        </div>
        <div className='px2 mt2'>
          <div className='block__header fill-h ac px1'><span className='ls1 caps'>Additional</span></div>
          <div className='f jcb fw'>
            {this.handleFilms(this.state.videos)}
          </div>
        </div>
      </Layout>
    )
  }
}
