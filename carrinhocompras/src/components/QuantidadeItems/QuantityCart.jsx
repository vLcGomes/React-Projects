import ButtonSub from './ButtonSub'
import ButtonPlus from './ButtonPlus'
import Display from './Display'
import './QuantityCart.css'

function CartQuantity(props) {
  return (
    <div className='cartQuantity'>
      <ButtonPlus />
      <Display />
      <ButtonSub />
    </div>
  )
}

export default CartQuantity;