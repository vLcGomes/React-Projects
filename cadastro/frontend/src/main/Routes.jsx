import { Routes, Route} from 'react-router-dom'

import Principal from '../components/home/Principal'
import UserCrud from '../components/user/UserCrud'

const rotas = props => 
    <Routes>
      <Route exact path='/' element={<Principal />} />
      <Route path='/users' element={<UserCrud />} />
      <Route path='*' element={<Principal />} />
    </Routes>


export default rotas