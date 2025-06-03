import React from 'react';
import '../css/PromoCards.css'; // Make sure this path is correct
import banner1 from "../assets/catagory/image12.avif";
import banner2 from "../assets/catagory/image1.avif";

export const PromoCards = () => {
  return (
    <div className="promo-cards">
      {/* Card 1 */}
      <div className="promo-card">
        <div className="promo-text">
          <h2>Fruits & Vegetables</h2>
          <p>Get Upto 30% Off</p>
          <button>Shop Now</button>
        </div>
        <img src={banner1} alt="Fruits" className="promo-img" />
      </div>

      {/* Card 2 */}
      <div className="promo-card">
        <div className="promo-text">
          <h2>Freshly Baked Buns</h2>
          <p>Get Upto 25% Off</p>
          <button>Shop Now</button>
        </div>
        <img src={banner2} alt="Bread" className="promo-img" />
      </div>
    </div>
  );
};
