import './Item.css'

function Item(props) {
  return <div 
    className='item'
    style={{backgroundColor: props.preta ? '#000' : '#fff'}}>
    </div>
}

export default Item