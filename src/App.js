import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Readers from './Components/Readers';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Readers/>
      <Footer/>
    </div>
  );
}

export default App;
