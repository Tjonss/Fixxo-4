

const ProductDetailsView = () => {
  return (
    <body className="ProductDetailsView">

        <div className="container text-danger w-100 text-center d-none d-md-block d-lg-block">
          <p>Get 25% OFF at the Fixxo Selection - Shop Now!</p>
        </div>
     
          <div className="d-none d-md-block d-lg-block d-flex w-100 m-4">
            <p><i class="fa-solid fa-house"></i> Home <i class="fa-solid fa-chevron-right"></i> Product Signal </p>
          </div>

    {/* -----------------------------------------  */}
       
      <div className="row justify-content-center container">
        
        
          <div className="container col-6">
         {/* Stor bild / "Karusell" */}
            <div className="col-sm-12 col-md-12 col-lg-12">
               
                <div className="col">
                  <img className="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" alt="" />
                </div>  
               
               {/* Små thumbnails */}
                <div className="row mt-4 mb-3">            
                   
                      <div className="col">
                        <img className=" img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" alt="" />
                      </div>                    
                      
                      <div className="col">
                        <img className=" img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" alt="" />
                      </div>
                                          
                      <div className="col">
                        <img className=" img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png" alt="" />
                      </div>         
                   
                  </div>               
            </div>  
          </div>


{/* ------------------------------------------------------- */}


          <div className="container col-6">
              
             <div className="col-sm-12 col-md-12 col-lg-12">
              
              <div className="d-flex">                   
                  <div>
                    <h3 className="">Modern Black Blouse</h3>
                   
                      <p className="">SKU: 12345670</p>  
                      <p className="">BRAND: The Northland</p>
                   
                </div>
              </div>
               
                <div className="text-red mt-1 mb-2">
                  <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                </div>

                <div className="col">
                  <h5>$35.00</h5>
                </div>

                <div className="">
                  <p>
                  Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (<span className="pdv-mocklink">read more</span>) 
                  </p>
                </div>  

                <div className="mt-4 mb-4">
                  <p className="">Size:</p>
                  <div className="">
                    <button className="ms-4 btn btn-md border-dark rounded-0">S</button>
                    <button className="ms-4 btn btn-md border-dark rounded-0">M</button>
                    <button className="ms-4 btn btn-md border-dark rounded-0">L</button>
                    <button className="ms-4 btn btn-md border-dark rounded-0">X</button>
                  </div>
                </div>

                <div className="mt-4 mb-4">
                  <p className="">
                    Color:
                  </p>
                  <button className="ms-4 btn border-dark rounded-0">Choose an Option <i class="ms-2 fa-solid fa-chevron-down"></i></button>
                    
                </div>

                    <div className="mt-4 mb-4">
                        <p className="">Qty:</p>
                      <div className="d-flex">                    
                          <div className="d-flex ms-4">
                              <button className="btn btn border-dark rounded-0">
                                <i class="fa-solid fa-minus"></i>
                              </button> 
                                  <div className="ps-4 pe-4 border-dark border-top border-bottom">
                                    <p className="position-absolute mt-2">1</p>
                                  </div>
                              <button className="btn border-dark rounded-0">
                                <i class="fa-solid fa-plus"></i>
                              </button>
                          </div>

                            <button className="ms-4 btn btn-danger btn-lg rounded-0 bg-red border-0"> ADD TO CART </button>
                      </div>   
                    </div>

                <div className="d-none d-md-block d-lg-block mt-4 mb-4">
                  <p className="">Share:</p>
                  <div className="">

                    <button className="btn rounded-circle bg-lgrey">
                      <i class="fa-brands fa-facebook-f"></i>
                    </button>

                    <button className="btn rounded-circle bg-lgrey">
                      <i class="fa-brands fa-instagram"></i>
                    </button>

                    <button className="btn rounded-circle bg-lgrey">
                      <i class="fa-brands fa-twitter"></i>
                    </button>

                    <button className="btn rounded-circle bg-lgrey">
                      <i class="fa-brands fa-google"></i>
                    </button>

                    <button className="btn rounded-circle bg-lgrey">
                      <i class="fa-brands fa-linkedin"></i>
                    </button>   

                  </div>
                </div>    
              
              </div>
                
          </div>
      </div>
    </body>
  )
}

export default ProductDetailsView