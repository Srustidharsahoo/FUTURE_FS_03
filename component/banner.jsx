import React from 'react';
import '../css/Banner.css'; // or use Banner.module.css
import img from '../assets/freshcart-logo.svg'

export const Banner = () => {
  return (
    <section className="banner">
      
      <div className="banner-content">
        <span className="discount-tag">Opening Sale Discount 50%</span>
        <h1 className="banner-heading">SuperMarket For Fresh Grocery</h1>
        <p className="banner-subtext">
          Introduced a new model for online grocery shopping and convenient home delivery.
        </p>
        <button className="shop-now">Show Now →</button>
      </div>

      <div className="banner-image">
        <img src={img} alt="Grocery Woman" />   
      </div>

    </section>
  );
};
