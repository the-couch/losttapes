import Head from 'next/head'
import stylesheet from '../../styles/main.css'
import Link from 'next/link'
import cx from 'classnames'

export default (props, context) => (
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
    <div className={cx('header f jcc px1', {
      'header__reverse': props.type === 'film'
    })}>
      <Link href='/'><a className='ls1 caps'>video days</a></Link>
      {/* <Link href='/notes'><a className='italic caps'>Notes</a></Link> */}
    </div>
  </div>
)
