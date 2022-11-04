import {Routes, Route} from 'react-router-dom'
import HomeView from './HomeView'
import ProductsView from './ProductsView'
import ProductDetailsView from './ProductDetailsView'


const Views = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomeView/>} />
        <Route path='/products/:id' element={<ProductDetailsView />}/>
        <Route path='/products' element={<ProductsView />}/>
        <Route />
      </Routes>
    </>
  )
}

export default Views