import './Button.css'

function button(props) {
  return (
    <button 
      onClick={e => props.click && props.click(props.label)}
      className={`
        button
        ${props.operation ? 'operation' : ''}
        ${props.double ? 'double' : ''}
        ${props.triple ? 'triple' : ''}
      `}
    >
      {props.label}
    </button>
  )
}

export default button