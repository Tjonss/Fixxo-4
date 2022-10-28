/* import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/navigation"; */

import '../App.css';



const ProductDetails = () => {
  return (
/*
  Bootstrap 5 - Navs & tabs - Tabs
*/ 
    <>
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button className="nav-link active" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">Description</button>
          <button className="nav-link" id="nav-additional-tab" data-bs-toggle="tab" data-bs-target="#nav-additional" type="button" role="tab" aria-controls="nav-additional" aria-selected="false">Additional</button>
          <button className="nav-link" id="nav-shoppingnreturn-tab" data-bs-toggle="tab" data-bs-target="#nav-shoppingnreturn" type="button" role="tab" aria-controls="nav-shoppingnreturn" aria-selected="false">Shopping & Return</button>
          <button className="nav-link" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Review</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">"Description" connection to backend Database. Description" connection to backend Database. Description" connection to backend Database. Description" connection to backend Database. Description" connection to backend Database. Description" connection to backend Database.</div>
        <div className="tab-pane fade" id="nav-additional" role="tabpanel" aria-labelledby="nav-additional-tab">"Additional" connection to backend Database. "Additional" connection to backend Database. "Additional" connection to backend Database. "Additional" connection to backend Database. "Additional" connection to backend Database. "Additional" connection to backend Database. "Additional" connection to backend Database.</div>
        <div className="tab-pane fade" id="nav-shoppingnreturn" role="tabpanel" aria-labelledby="nav-shoppingnreturn-tab">"Shopping and Return" connection to backend Database. "Shopping and Return" connection to backend Database. "Shopping and Return" connection to backend Database. "Shopping and Return" connection to backend Database. "Shopping and Return" connection to backend Database. "Shopping and Return" connection to backend Database. </div>
        <div className="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">"Review" connection to backend Database. "Review" connection to backend Database. "Review" connection to backend Database. "Review" connection to backend Database. "Review" connection to backend Database. "Review" connection to backend Database. "Review" connection to backend Database. "Review" connection to backend Database.</div>
      </div>
    </div>

    
{/*     <Swiper
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
      </Swiper> */}
    
  </>
  )
}

export default ProductDetails