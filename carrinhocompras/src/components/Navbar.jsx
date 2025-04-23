import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='title'>Car Store</h1>
      <a href="google.com">
        <FontAwesomeIcon id='cart-icon' icon={faCartShopping} />
      </a>
    </nav>
  )
}

export default Navbar;