import { Component } from 'react'
import Head from 'next/head'
import stylesheet from '../../styles/main.css'
import Link from 'next/link'
import cx from 'classnames'

export default  class extends Component {
  constructor () {
    super()
    this.state = {
      search: ''
    }
  }
  handleSearch (e) {
    e.preventDefault()
    console.log('search?', e)
    document.location.href = '/search?title=' + this.state.search
  }
  render () {
    console.log(this.state.search)
    return (
      <div>
        <Head>
          <title>video days</title>
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta name='description' content='a place for skateboarding to live after the vhs' />
          <meta name='keywords' content='skateboarding, archive, collection, vhs' />
          <meta name='og:url' content='https://video-days.com' />
          <meta name='fragment' content='!' />
          <meta http-equiv='Accept-CH' content='DPR, Width, Viewport-Width' />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <div className={cx('header f jcb aic px1', {
          'header__reverse': this.props.type === 'film'
        })}>
          <div className='header__weight'>&nbsp;</div>
          <Link href='/'><a className='ls1 caps'>video days</a></Link>
          <div className='search header__weight'>
            <form className='f jcb' onSubmit={(e) => this.handleSearch(e)}>
              <input type='text' onChange={e => this.setState({search: e.target.value})} className='small' name='search' />
              <button type='submit'>
                <svg width='19px' height='19px' viewBox='0 0 19 19'><g id='Home---WIreFrames' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'><g id='Home-Page-Mobile' transform='translate(-235.000000, -33.000000)' stroke='#ffffff'><g id='Header' transform='translate(-3.000000, 0.000000)'><g id='Search-Icon' transform='translate(238.000000, 34.000000)'><circle id='Oval-2' cx='11' cy='7' r='7' /><path d='M5.5,12.5 L0.5,17.5' id='Line-2' strokeLinecap='square' /></g></g></g></g></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
