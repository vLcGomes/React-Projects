import { useState } from 'react';
import './Card.css'

function Card() {
  
  const [updateHour, setUpdateHour] = useState(String(new Date()))

  return ( 
    <div className="card">
      <h2 className="card-title">Monetary donation</h2>
      <p className="card-description">Contribute code or a monetary donation to an open-source software project</p>
      <div className="isCompletedDiv">
        <input id="complete" type="checkbox" />
        <label for="complete">COMPLETED</label>
      </div>
      <time datetime={updateHour}>{updateHour}</time>
    </div>
  )
}

export default Card;