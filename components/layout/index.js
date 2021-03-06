import Header from 'sections/header'
import Footer from 'sections/footer'

export default ({children, type}) => (
  <div className='container'>
    <Header type={type} />
    <div className='container--l container'>
      <div>{children}</div>
    </div>
    <Footer />
  </div>
)
