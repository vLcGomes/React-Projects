import './ButtonSub.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function buttonSub(props) {
  return (
    <button className='buttonSub'>
      <FontAwesomeIcon icon={faMinus} />
    </button>
  ) 
}

export default buttonSub