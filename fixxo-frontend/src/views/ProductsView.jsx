import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import SingleFeaturedProduct from '../components/FeaturedProducts/SingleFeaturedProduct'
import { ProductsContext } from '../contexts/ProductsContext'

const ProductsView = () => {

  const { products, getProducts } = useContext(ProductsContext)

  useEffect(() => {
    getProducts()
  }, [])
  return (
    <>
      <div className="container mt-5 ">
        <div className="col-12 container mb-4 d-flex align-items-center">
          <i className="fa-solid fa-house d-inline fs-"></i>
          <small className='ms-3'>Categories</small>
          <i className="fa-solid fa-chevron-right mx-3 small"></i>
          <small className=''>Product page</small>
        </div>
        <div className="container">
          <div className="row">
            <div className="All-categories col-3 d-none d-md-block">
                <p>All Categories</p>
                <hr />
                <p className='small mb-2'>Accessories</p>
                <p className='small mb-2'>Watch Fashion</p>
                <p className='small mb-2'>Tees, Knits & Polos</p>
                <p className='small mb-3'>Pants & Denim</p>
              <div className="Price mb-4">
                <p>Price</p>
                <hr />
                <label htmlFor="customRange2" className="form-label"></label>
                <input type="range" className="form-range" min="0" max="1000" id="customRange2"></input>
                <p className='text-end small'>0 - 1000</p>
              </div>
              <div className="Size">
                <p>Sizes</p>
                <hr />
                <p className='small mb-2'>Small</p>
                <p className='small mb-2'>Medium</p>
                <p className='small mb-2'>Large</p>
                <p className='small mb-3'>Extra Large</p>
              </div>
              <div className="Color">
                <p>Color</p>
                <hr />
                <div className="Products-Colors mb-3">
                  <div>
                    <input type="checkbox" name="black" id="forblack" />
                    <label htmlFor='black' className='small mb-2 ms-2'>Black</label>
                  </div>
                  <div>
                    <input type="checkbox" name="black" id="forblue" />
                    <label htmlFor='blue' className='small mb-2 ms-2'>Blue</label>
                  </div>
                  <div>
                    <input type="checkbox" name="black" id="forred" />
                    <label htmlFor='red' className='small mb-2 ms-2'>Red</label>
                  </div>
                  <div>
                    <input type="checkbox" name="black" id="forgreen" />
                    <label htmlFor='green' className='small mb-2 ms-2'>Green</label>
                  </div>
                </div>
                <div className="Brands">
                  <p>Brands</p>
                  <hr />
                  <p className='small mb-2'>Accessories</p>
                  <p className='small mb-2'>Watch Fashion</p>
                  <p className='small mb-2'>Tees, Knits & Polos</p>
                  <p className='small mb-3'>Pants & Denim</p>
                </div>
              </div>
          </div>
          <div className="col-12 col-md-9">
            <div className="row text-center gy-2">
              {products && products.map(product => <SingleFeaturedProduct key={product.name} product={product} />)}
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default ProductsView