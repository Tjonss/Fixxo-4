import React from "react";
import "./FeaturedInstagram.css";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";

const FeatureInstagram = () => {
  return (
    <div className="container">
      <div className="support">
        <div className="row">
          <div className="card-group col-md-3 mt-md-5">
            <div className="card me-3 mb-3 border border-0">
              <img
                className="icon text-center mb-3"
                src={icon3}
                alt="support"
              />
              <div className="text-center mb-3 h5">
                <strong>Customer support</strong>
              </div>
              <div className="text-center mb-md-5">
                Village did removed enjoyed explain talking.
              </div>
            </div>
          </div>

          <div className="card-group col-md-3 mt-md-5">
            <div className="card me-3 mb-3 border border-0">
              <img className="icon mb-3" src={icon2} alt="securedpayment" />
              <div className="text-center mb-3 h5">
                <strong>Secured Payment</strong>
              </div>
              <div className="text-center mb-md-5">
                Village did removed enjoyed explain talking.
              </div>
            </div>
          </div>

          <div className="card-group col-md-3 mt-md-5">
            <div className="card me-3 mb-3 border border-0">
              <img
                className="icon text-center mb-3"
                src={icon1}
                alt="truckdelivery"
              />
              <div className="text-center mb-3 h5">
                <strong>Free Home Delivery</strong>
              </div>
              <div className="text-center mb-md-5">
                Village did removed enjoyed explain talking.
              </div>
            </div>
          </div>

          <div className="card-group col-md-3 mt-md-5">
            <div className="card me-3 mb-3 border border-0">
              <img className="icon mb-3" src={icon1} alt="truckdelivery" />
              <div className="text-center mb-3 h5">
                <strong>30 Day Return</strong>
              </div>
              <div className="text-center mb-md-5">
                Village did removed enjoyed explain talking.
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="text-center mt-5 mb-4 h5 d-none d-lg-block">
        <strong>Our Instagram</strong>
      </div>
      <div className="text-center mt-5 mb-4 h5 d-lg-none d-sm-block">
        <strong>Follow Us On Instagram</strong>
      </div>

      <div className="row ">
        <div className="insta d-none d-lg-block">
          <div className="card-group">
            <div className="card me-3 mb-3 border border-0 rounded-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                className="photo"
                alt="Hollywood Sign on The Hill"
              />
            </div>

            <div className="card me-3 mb-3 border border-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                className="photo"
                alt="Palm Springs Road"
              />
            </div>

            <div className="card me-3 mb-3 border border-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                className="photo"
                alt="Los Angeles Skyscrapers"
              />
            </div>

            <div className="card me-3 mb-3 border border-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                className="photo"
                alt="Los Angeles Skyscrapers"
              />
            </div>

            <div className="card mb-3 border border-0 rounded-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                className="photo"
                alt="Los Angeles Skyscrapers"
              />
            </div>
          </div>

          <div className="card-group">
            <div className="card me-3 border border-0 rounded-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                className="photo"
                alt="Hollywood Sign on The Hill"
              />
            </div>

            <div className="card me-3 border border-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                className="photo"
                alt="Palm Springs Road"
              />
            </div>

            <div className="card me-3 border border-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                className="photo"
                alt="Los Angeles Skyscrapers"
              />
            </div>

            <div className="card me-3 border border-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                className="photo"
                alt="Los Angeles Skyscrapers"
              />
            </div>

            <div className="card border border-0 rounded-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                className="photo"
                alt="Los Angeles Skyscrapers"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="follow position-relative d-none d-lg-block">
        <div className="d-flex justify-content-center border border-0">
          <div className="text-center bg-dark text-light w-25 pt-3 pb-3">
            <div className="pt-4"></div>
            <p>
              <strong>
                <i className="fas fa-camera-retro fa-2x"></i>
              </strong>
            </p>
            <p>
              <strong>INSTAGRAM</strong>
            </p>
            <button className="bg-dark text-light ps-5 pe-5 pt-2 pb-2 border-light mb-4">
              <small>
                <strong>FOLLOW</strong>
              </small>
            </button>
          </div>
        </div>
      </div>

      <div className="card text-center border border-0 d-lg-none d-lg-block">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
          className="photo"
          alt="Palm Springs Road"
        />
      </div>

      <div className="follow2 position-relative">
        <div className="text-center border border-0 d-lg-none d-lg-block">
          <button className="bg-dark text-light text-center border-light mb-5 ps-5 pe-5 pt-2 pb-2">
            <small>
              <strong>FOLLOW</strong>
            </small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureInstagram;
