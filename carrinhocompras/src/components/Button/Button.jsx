import { use, useState } from 'react';
import './Button.css'
/* Qual a melhor forma de estilizar, o botão tem o mesmo esqueleto, mas possui estilos diferentes */


function button(props) {
  // const [car1, setcar1] = useState()
  // const [car2, setcar2] = useState()
  // const [car3, setcar3] = useState()

  function adicionaCarrinho(props) {
    // switch (props.text) {
    //   case 'Batmovel':
    //     if (car1 === 1) {
    //       alert('O item já esta no carrinho para aumentar a quantidade visite a página Carrinho de Compras')
    //     }
    //     setcar1(car1++)
    //   case 'Gol Quadrado':
    //     if (car2 === 1) {
    //       alert('O item já esta no carrinho para aumentar a quantidade visite a página Carrinho de Compras')
    //     }
    //     setcar2(car2++)
    //   case 'Excort Conversível':
    //     if (car3 === 1) {
    //       alert('O item já esta no carrinho para aumentar a quantidade visite a página Carrinho de Compras')
    //     }
    //     setcar3(car3++)
    // }
  }

  return (
  <button className='button' onClick={adicionaCarrinho(props)}>
    {props.text}
  </button>
  )
}

export default button;