import Header from 'sections/header'
import Footer from 'sections/footer'

export default ({children, type}) => (
  <div className='container container--l'>
    <Header type={type} />
    <div>{children}</div>
    <Footer />
  </div>
)
