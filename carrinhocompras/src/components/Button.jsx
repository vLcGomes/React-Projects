import './Button.css'
/* Qual a melhor forma de estilizar, o botão tem o mesmo esqueleto, mas possui estilos diferentes */


function button(props) {
  return (
  <button className='button'>
    {props.text}
  </button>
  )
}

export default button;