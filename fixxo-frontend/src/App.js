import './App.css';
import Footer from './components/Footer/Footer';
import { ProductsContextProvider } from './contexts/ProductsContext';
import Navbar from './views/Navbar/Navbar';
import Views from './views/Views';


function App() {
  return (

    <div className="App">
      <ProductsContextProvider>        
        <Navbar/>
        <Views />
        <Footer />
      </ProductsContextProvider>
    </div>

  );
}

export default App;