import './App.css';
import Footer from './components/Footer/Footer';
import { CartContextProvider } from './contexts/CartContext';
import { ProductsContextProvider } from './contexts/ProductsContext';
import Navbar from './views/Navbar/Navbar';
import Views from './views/Views';


function App() {
  return (

    <div className="App">
      <CartContextProvider>
        <Navbar/>
        <ProductsContextProvider>        
          <Views />
        </ProductsContextProvider>
      </CartContextProvider>
      <Footer />
    </div>

  );
}

export default App;