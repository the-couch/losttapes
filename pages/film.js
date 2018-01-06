import { Component } from 'react'
import Layout from 'components/layout'
import 'isomorphic-fetch'
import contentfulAPI from 'api/contentful'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activePart: 0
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
  render () {
    const {
      title,
      releasedAt,
      company,
      videoUrl,
      parts
    } = this.props.film.fields

    return (
      <Layout>
        <h3>{title}</h3>
        {company && (<h5>{company.fields.name}</h5>)}
        <div className='f jcb video__single'>
          <div className='video__window'>
            {videoUrl && (
              <video src={videoUrl} controls />
            )}
            {parts && (
              <div>{this.handleVideoParts(parts)}</div>
            )}
          </div>
          <div className='ar video__parts'>
            <h5>Parts</h5>
            {parts && this.displayAllParts(parts)}
          </div>
        </div>
      </Layout>
    )
  }
}