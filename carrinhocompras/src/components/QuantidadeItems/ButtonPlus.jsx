import './ButtonPlus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function buttonPlus(props) {
  return (
    <button className='buttonPlus'>
      <FontAwesomeIcon icon={faPlus} />
      </button>
  )
}

export default buttonPlus;