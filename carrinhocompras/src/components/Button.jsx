import './Button.css'
/* Qual a melhor forma de estilizar, o botão tem o mesmo esqueleto, mas possui estilos diferentes */


function button(props) {
  return (
  <button className='button'>
    <i src={props.icon}></i>
  </button>
  )
}

export default button;