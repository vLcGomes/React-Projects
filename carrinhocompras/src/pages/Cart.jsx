import './Cart.css'
import Car1 from '../images/car1.png'
import Car2 from '../images/car2.png'
import Car3 from '../images/car3.png'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

function CartPage(props) {
  return (
    <div className='cart'>
      <Navbar />
      <div id='contentCart'>
        <div className='image-box'>
          <img src={Car1} alt='teste' />
        </div>
          <h1>Batmovel</h1>
      </div>

      <Footer />
    </div>
  )
}

export default CartPage