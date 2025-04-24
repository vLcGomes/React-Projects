import './Cart.css'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function CartPage(props) {
  return (
    <div className='cart'>
      <Navbar />
      <div id='content'></div>

      
      <Footer />
    </div>
  )
}

export default CartPage