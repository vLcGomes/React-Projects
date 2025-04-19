import './Nav.css'
import { Link } from 'react-router-dom'

const nav = props =>
  <aside className="menu-area">
    <nav className='menu'>
      <Link to="/">
        <i className="fa fa-home"></i> Início
      </Link>
      <Link to="/users">
        <i clLinkssName="fa fa-users"></i> Usuários
      </Link>
    </nav>
  </aside>

export default nav