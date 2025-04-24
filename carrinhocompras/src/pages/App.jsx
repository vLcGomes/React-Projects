import Item from '../components/Item/Item';
import './App.css';
import Car1 from '../images/car1.png'
import Car2 from '../images/car2.png'
import Car3 from '../images/car3.png'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id='contentApp'>
        <Item image={Car1} text='Batmovel' />
        <Item image={Car2} text='Gol Quadrado' />
        <Item image={Car3} text='Escort Conversível' />
      </div>
      <Footer />
    </div>
  );
}

export default App;
