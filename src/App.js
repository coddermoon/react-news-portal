
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar/Navbar';
import NavSec from './components/Header/NavSec/NavSec';
import HotNews from './components/HotNews/HotNews';
import TechNews from './components/TechNews/TechNews';
import WorldNews from './components/WorldNews/WorldNews';



function App() {
 

  return (
    <div className="App">
      <header>
      <Navbar></Navbar>
 <NavSec></NavSec>
      </header>

      <main className='container mx-auto'>
<HotNews></HotNews>
<WorldNews></WorldNews>
<TechNews></TechNews>
      </main>

      <footer className='bg-white shadow-xl py-5'>
        <Footer></Footer>
      </footer>




  
  </div>
  );
}


export default App;
