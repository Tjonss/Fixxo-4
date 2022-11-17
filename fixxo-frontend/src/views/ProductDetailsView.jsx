import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../App.css";
import { useContext, useEffect } from "react";
import { ProductsContext } from "../contexts/ProductsContext";

import { useParams } from "react-router-dom";
import CartContext from '../contexts/CartContext';

/* -------------------------- database / Ehsan ---------------------------*/
const data = [
  {
    id: 1,
    productName: "Product 1",
    price: "100",
  },
  {
    id: 2,
    productName: "Product 2",
    price: "200",
  },
  {
    id: 3,
    productName: "Product 3",
    price: "300",
  },
  {
    id: 4,
    productName: "Product 4",
    price: "400",
  },
  {
    id: 5,
    productName: "Product 5",
    price: "500",
  },
  {
    id: 6,
    productName: "Product 6",
    price: "600",
  },
];

const ProductDetailsView = () => {

  const { product, getSingleProduct } = useContext(ProductsContext);
  const { increment, decrement, dispatch } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(id);
  }, [getSingleProduct, id, dispatch]);

  return (
    <section className='ProductDetailsView container'>
      <div className='container text-danger w-100 text-center d-none d-md-block d-lg-block'>
        <p>Get 25% OFF at the Fixxo Selection - Shop Now!</p>
      </div>

      <div className='d-none d-md-block d-lg-block d-flex w-100 m-4'>
        <p>
          <i className='fa-solid fa-house'></i> Home{" "}
          <i className='fa-solid fa-chevron-right'></i> Product Signal{" "}
        </p>
      </div>


      <div className='row justify-content-center container'>
        <div className='container col-6'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <div className='col'>
              {product && <img className='img-fluid w-75 mx-auto' src={product.imageURL} alt='' />}
            </div>

            <div className='row mt-4 mb-3'>
              <div className='col'>
                <img
                  className=' img-fluid'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'
                  alt=''
                />
              </div>
              <div className='col'>
                <img
                  className=' img-fluid'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'
                  alt=''
                />
              </div>
              <div className='col'>
                <img
                  className=' img-fluid'
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>    
        <div className='container col-6'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <div className='d-flex'>
              {product &&(
                <div>
                  <h3 className=''>{product.name}</h3>
                  <p className=''>SKU: 12345670</p>
                  <p className=''>Category: {product.categoryName}</p>
                </div>)}
            </div>

            <div className='text-red mt-1 mb-2'>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
              <i className='fa-solid fa-star'></i>
            </div>

            <div className='col'>
              {product && <h5>{product.price}:-</h5>}
            </div>

            <div className=''>
              {product && <p>
                {product.description} (
                <span className='pdv-mocklink'>read more</span>)
              </p>}
            </div>

            <div className='mt-4 mb-4'>
              <p className=''>Size:</p>
              <div className=''>
                <button className='ms-4 btn btn-md border-dark rounded-0'>
                  S
                </button>
                <button className='ms-4 btn btn-md border-dark rounded-0'>
                  M
                </button>
                <button className='ms-4 btn btn-md border-dark rounded-0'>
                  L
                </button>
                <button className='ms-4 btn btn-md border-dark rounded-0'>
                  X
                </button>
              </div>
            </div>

            <div className='mt-4 mb-4'>
              <p className=''>Color:</p>
              <button className='ms-4 btn border-dark rounded-0'>
                Choose an Option
                <i className='ms-2 fa-solid fa-chevron-down'></i>
              </button>
            </div>

            <div className='mt-4 mb-4'>
              <p className=''>Qty:</p>
              <div className='d-flex'>
                <div className='d-flex ms-4'>
                  <button onClick={decrement} className='btn btn border-dark rounded-0'>
                    <i className='fa-solid fa-minus'></i>
                  </button>
                  <div className='ps-4 pe-4 border-dark border-top border-bottom'>
                    <p className='position-absolute mt-2'>1</p>
                  </div>
                  <button onClick={increment} className='btn border-dark rounded-0'>
                    <i className='fa-solid fa-plus'></i>
                  </button>
                </div>

                <button className='ms-4 btn btn-danger btn-lg rounded-0 bg-red border-0'>
                  ADD TO CART
                </button>
              </div>
            </div>
          
            <div className='d-none d-md-block d-lg-block mt-4 mb-4'>
              <p className=''>Share:</p>
              <div className=''>
                <button className='btn rounded-circle bg-lgrey'>
                  <i className='fa-brands fa-facebook-f'></i>
                </button>

                <button className='btn rounded-circle bg-lgrey'>
                  <i className='fa-brands fa-instagram'></i>
                </button>

                <button className='btn rounded-circle bg-lgrey'>
                  <i className='fa-brands fa-twitter'></i>
                </button>

                <button className='btn rounded-circle bg-lgrey'>
                  <i className='fa-brands fa-google'></i>
                </button>

                <button className='btn rounded-circle bg-lgrey'>
                  <i className='fa-brands fa-linkedin'></i>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------- ehsan --------------------------- */}
        <br />
        <br />
        <br />
        <div>
          <nav>
            <div className='nav nav-tabs' id='nav-tab' role='tablist'>
              <button
                className='nav-link active'
                id='nav-description-tab'
                data-bs-toggle='tab'
                data-bs-target='#nav-description'
                type='button'
                role='tab'
                aria-controls='nav-description'
                aria-selected='true'
              >
                Description
              </button>
              <button
                className='nav-link'
                id='nav-additional-tab'
                data-bs-toggle='tab'
                data-bs-target='#nav-additional'
                type='button'
                role='tab'
                aria-controls='nav-additional'
                aria-selected='false'
              >
                Additional
              </button>
              <button
                className='nav-link'
                id='nav-shoppingnreturn-tab'
                data-bs-toggle='tab'
                data-bs-target='#nav-shoppingnreturn'
                type='button'
                role='tab'
                aria-controls='nav-shoppingnreturn'
                aria-selected='false'
              >
                Shopping & Return
              </button>
              <button
                className='nav-link'
                id='nav-review-tab'
                data-bs-toggle='tab'
                data-bs-target='#nav-review'
                type='button'
                role='tab'
                aria-controls='nav-review'
                aria-selected='false'
              >
                Review
              </button>
            </div>
          </nav>
          <div className='tab-content' id='nav-tabContent'>
            <div
              className='tab-pane fade show active'
              id='nav-description'
              role='tabpanel'
              aria-labelledby='nav-description-tab'
            >
              "Description" connection to backend Database. Description"
              connection to backend Database. Description" connection to backend
              Database. Description" connection to backend Database.
              Description" connection to backend Database. Description"
              connection to backend Database.
            </div>
            <div
              className='tab-pane fade'
              id='nav-additional'
              role='tabpanel'
              aria-labelledby='nav-additional-tab'
            >
              "Additional" connection to backend Database. "Additional"
              connection to backend Database. "Additional" connection to backend
              Database. "Additional" connection to backend Database.
              "Additional" connection to backend Database. "Additional"
              connection to backend Database. "Additional" connection to backend
              Database.
            </div>
            <div
              className='tab-pane fade'
              id='nav-shoppingnreturn'
              role='tabpanel'
              aria-labelledby='nav-shoppingnreturn-tab'
            >
              "Shopping and Return" connection to backend Database. "Shopping
              and Return" connection to backend Database. "Shopping and Return"
              connection to backend Database. "Shopping and Return" connection
              to backend Database. "Shopping and Return" connection to backend
              Database. "Shopping and Return" connection to backend Database.{" "}
            </div>
            <div
              className='tab-pane fade'
              id='nav-review'
              role='tabpanel'
              aria-labelledby='nav-review-tab'
            >
              "Review" connection to backend Database. "Review" connection to
              backend Database. "Review" connection to backend Database.
              "Review" connection to backend Database. "Review" connection to
              backend Database. "Review" connection to backend Database.
              "Review" connection to backend Database. "Review" connection to
              backend Database.
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className='swiper-container'>
          <h1>Related Products</h1>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={25}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {data.map((product) => (
              <SwiperSlide key={product.id} className='slide'>
                <div className='slide-content'>
                  <div className='product-image'>
                    <img
                      src='/Grupp4Image.jpg'
                      alt=''
                      className='product-photo'
                    />
                    <h5>{product.productName}</h5>
                    <p className='price-tag'>PRICE: {product.price}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsView;
