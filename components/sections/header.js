const gray = '#223355'
import Head from 'next/head'
import stylesheet from '../../styles/main.css'
import Link from 'next/link'

export default () => (
  <div>
    <Head>
      <title>the lost tapes</title>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content="a place for skateboarding to live after the vhs" />
      <meta name='keywords' content='skateboarding, archive, collection, vhs' />
      <meta name='og:url' content='https://thelosttapes.now.sh' />
      <meta name='fragment' content='!' />
      <meta http-equiv='Accept-CH' content='DPR, Width, Viewport-Width' />
    </Head>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <style jsx>{`
      .header {
        margin: 40px 0 80px;
      }
    `}</style>
    <div className='header f jcb'>
      <Link href='/'><a className='small'>the lost tapes</a></Link>
      <Link href='/notes'><a className='italic caps'>Notes</a></Link>
    </div>
  </div>
)