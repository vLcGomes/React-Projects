import './Item.css'
import Button from './Button'

function Item(props) {

  return(
    <div className='item'>
      <img className='item-image' src={props.image} alt='teste'/>
      <h1 className='name'>{props.text}</h1>
      <Button text='Adicionar ao Carrinho' />
    </div>
  )
}

export default Item;