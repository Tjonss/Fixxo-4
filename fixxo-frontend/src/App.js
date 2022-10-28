import './App.css';
import Footer from './components/Footer/Footer';
import FeaturedInstagram from './components/FeaturedInstagram/FeaturedInstagram';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';

function App() {
  return (
    <div className="App">
      <FeaturedProducts />
      <FeaturedInstagram />
      <Footer />


    </div>
  );
}

export default App;
