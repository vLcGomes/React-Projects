import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar'>
      <Link className="title" to="/">
        <h1 className='title'>Car Store</h1>
      </Link>
      <Link to="/cart">
        <div id='cart-count'></div>
        <FontAwesomeIcon id='cart-icon' icon={faCartShopping}></FontAwesomeIcon>
      </Link>
    </nav>
  )
}

export default Navbar;