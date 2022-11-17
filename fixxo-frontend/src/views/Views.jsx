import {Routes, Route} from 'react-router-dom'
import HomeView from './HomeView'
import ProductsView from './ProductsView'
import ProductDetailsView from './ProductDetailsView'
import ShoppingCart from './ShoppingCart/ShoppingCart'


const Views = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeView/>} />
        <Route path='/products/:id' element={<ProductDetailsView />}/>
        <Route path='/products' element={<ProductsView />}/>
        <Route path='/cart' element={<ShoppingCart />}/>
        <Route />
      </Routes>
    </>
  )
}

export default Views