const gray = '#223355'
import GlobalStyle from '../../styles/global'
import Link from 'next/link'

export default () => (
  <div>
    <GlobalStyle />
    <style jsx global>{`
      .header {
        margin: 40px 0 80px;
      }
    `}</style>
    <div className='header f jcb'>
      <Link prefetch href='/'><a className='small'>the lost tapes</a></Link>
      <Link prefetch href='/notes'><a className='italic caps'>Notes</a></Link>
    </div>
  </div>
)