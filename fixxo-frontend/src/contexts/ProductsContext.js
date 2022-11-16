import { createContext, useState } from 'react';
import axios from 'axios';

export const ProductsContext = createContext();

export const ProductsContextProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(null);

  const getProducts = async () => {
    try {
      const res = await axios.get('https://localhost:7090/api/products')
      setProducts(res.data)
    }
    catch (err) {
      console.log(err.message)
    }
  }

  const getSingleProduct = async (_id) => {
    try {
      const res = await axios.get(`https://localhost:7090/api/products/` + _id)
      setProduct(res.data)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <ProductsContext.Provider value={{ products, getProducts, setProducts, getSingleProduct, product, setProducts }}>
      { children }
    </ProductsContext.Provider>
  )
}