import './Logo.css'
import logo from '../../assets/imgs/logo.png'

const principal = props => 
  <aside className='logo'>
    <a href="/" className="logo">
      <img src={logo} alt="logo" />
    </a>
  </aside>


export default principal