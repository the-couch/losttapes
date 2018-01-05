const gray = '#223355'
// import GlobalStyle from '../../styles/global'
import stylesheet from '../../styles/main.css'
import Link from 'next/link'

export default () => (
  <div>
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