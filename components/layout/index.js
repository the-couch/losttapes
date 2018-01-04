import Header from '../sections/header'

export default ({children}) => (
  <div className='px2 container'>
    <Header />
    <div>{children}</div>
  </div>
)