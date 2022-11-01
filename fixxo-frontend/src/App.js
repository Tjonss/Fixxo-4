import './App.css';
import Footer from './components/Footer/Footer';
import FeaturedInstagram from './components/FeaturedInstagram/FeaturedInstagram';
import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
import ProductDetailsView from './views/ProductDetailsView';
import ProductsView from './views/ProductsView';


function App() {
  return (

    <div className="App">
      <FeaturedProducts />
      <FeaturedInstagram />
      <ProductsView />
      <ProductDetailsView/>
      <Footer />

    </div>

  );
}

export default App;