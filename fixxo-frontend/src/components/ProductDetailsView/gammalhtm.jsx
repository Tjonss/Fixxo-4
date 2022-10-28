
const ProductDetailsView = () => {
  return (
    <body className="ProductDetailsView">

        <div className="container pdv-sale text-danger w-100 text-center">
          <p>Get 25% OFF at the Fixxo Selection - Shop Now!</p>
        </div>
     
          <div className="container pdv-bread d-flex w-100 m-4">
            <p><i class="fa-solid fa-house"></i> Home <i class="fa-solid fa-chevron-right"></i> Product Signal </p>
          </div>
     
        <div className="col-md row-sm pdv-big-container container d-flex">

         
          <div className="container col-6 pdv-img">
            <div className="pdv-img-sub">
                <div className="bg-thumb">
                  <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" alt="" />
                </div>  
                <div className="sm-thumb d-flex">
                  <img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" alt="" />
                  <img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" alt="" />
                  <img className="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" alt="" />
                </div>               
            </div>  
          </div>
          <div className="container col-6 pdv-txt ">
              <div className="d-flex">                   
                <h3 className="pdv-itemhead">Modern Black Blouse</h3>
                <div className="pdv-itemdata d-flex">
                <p className="">SKU: 12345670</p>  
                <p className="">BRAND: The Northland</p>
                </div>
                </div>
                
                <div className="pdv-rating d-flex">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>

                <div className="pdv-price">
                  <h5>$35.00</h5>
                </div>

                <div className="pdv-desc d-flex">
                  <p>
                  Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<span className="pdv-mocklink">read more</span>) 
                  </p>
                </div>  

                <div className="pdv-size d-flex mt-4 mb-4">
                  <p className="pdv-exp-text">Size:</p>
                  <div className="pdv-btn-grp">
                    <button className="btn pdv-btn">S</button>
                    <button className="btn pdv-btn">M</button>
                    <button className="btn pdv-btn">L</button>
                    <button className="btn pdv-btn">X</button>
                  </div>
                </div>

                <div className="pdv-color-dropdown d-flex mt-4 mb-4">
                  <p className="pdv-exp-text">
                    Color:
                  </p>
                  {/* <button className="btn pdv-btn dropdown pdv-btn-grp">Choose an Option <i class="fa-solid fa-chevron-down"></i></button> */}
                    
                </div>

                    <div className="pdv-qty-toggle d-flex mt-4 mb-4">
                        <p className="pdv-exp-text">Qty:</p>
                      <div className="pdv-grejer d-flex">                    
                          <div className="pdv-toggler d-flex">
                              <button className="btn pdv-btn toggler-minus"><i class="fa-solid fa-minus"></i></button> 
                              <div className="pdv-counterbox"> <p className="toggler-qty-counter">1</p> </div>
                              <button className="btn pdv-btn toggler-plus"><i class="fa-solid fa-plus"></i></button>
                          </div>

                            <button className="btn pdv-cart-btn"> ADD TO CART </button>
                      </div>   
                    </div>

                    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        nagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1
          },
          480: {
            slidesPerView: 2
          },
          640: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 5
          },
          1820: {
            slidesPerView: 6
          },
        }}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

                <div className="pdv-social d-flex mt-4 mb-4">
                  <p className="pdv-exp-text">Share:</p>
                  <div className="pdv-socialbox pdv-btn-grp">
                    <button className="btn pdv-social-btn"><i class="fa-brands fa-facebook-f"></i></button>
                    <button className="btn pdv-social-btn"><i class="fa-brands fa-instagram"></i></button>
                    <button className="btn pdv-social-btn"><i class="fa-brands fa-twitter"></i></button>
                    <button className="btn pdv-social-btn"><i class="fa-brands fa-google"></i></button>
                    <button className="btn pdv-social-btn"><i class="fa-brands fa-linkedin"></i></button>                    
                  </div>
                </div>    
               
                
          </div>
        </div>
    </body>
  )
}

export default ProductDetailsView