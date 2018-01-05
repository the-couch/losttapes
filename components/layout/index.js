import Header from 'sections/header'
import Footer from 'sections/footer'

export default ({children}) => (
  <div className='px2 container'>
    <Header />
    <div>{children}</div>
    <Footer />
  </div>
)