import './App.css';
import Footer from './components/Footer/Footer';
// import FeaturedInstagram from './components/FeaturedInstagram/FeaturedInstagram';
// import FeaturedProducts from './components/FeaturedProducts/FeaturedProducts';
// import ProductDetailsView from './views/ProductDetailsView';
// import ProductsView from './views/ProductsView';
import Navbar from './views/Navbar/Navbar';
// import Showroom from './views/Showroom/Showroom';
import Views from './views/Views';


function App() {
  return (

    <div className="App">
      <Navbar/>

      <Views />
      {/* <Showroom/> */}
      {/* <FeaturedProducts /> */}
      {/* <FeaturedInstagram /> */}
      {/* <ProductsView /> */}
      {/* <ProductDetailsView/> */}
      <Footer />

    </div>

  );
}

export default App;