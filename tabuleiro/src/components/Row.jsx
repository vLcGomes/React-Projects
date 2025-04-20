import Item from './Item'
import './Row.css'

function Row(props) {

  const reverseOrNot = props.reverse ? 'row-reverse' : 'row'

  return <div className='row'
    style={{flexDirection: reverseOrNot}}>
    <Item />
    <Item preta/>
    <Item />
    <Item preta/>
    <Item />
    <Item preta/>
    <Item />
    <Item preta/>
  </div>
}

export default Row