import './Item.css'

export default props => {
  return (
    <div className="item" style='background: ${props.color}'>
    </div>
  )
}