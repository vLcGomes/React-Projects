import Display from './components/Display'
import Button from './components/Button'
import { useState } from 'react'
import './App.css';

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 id='contador' style={
        {
          fontSize: '55px',
          color: '#ccc'
        }
      }>
        contador
      </h1>
      <Display count={count} />
      <div id='options'>
        <Button onClick={() => setCount(count + 1)} name='INCREMENT'/>
        <Button onClick={() => setCount(count - 1)} name='DECREMENT'/>
      </div>
    </div>
  );
}

export default App;
