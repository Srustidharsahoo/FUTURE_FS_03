import React from 'react';
import '../css/Fotter.css';

export const Fotter = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>Categories</h4>
          <ul>
            <li>Vegetables & Fruits</li>
            <li>Breakfast & instant food</li>
            <li>Bakery & Biscuits</li>
            <li>Atta, rice & dal</li>
            <li>Sauces & spreads</li>
            <li>Organic & gourmet</li>
            <li>Baby care</li>
            <li>Cleaning essentials</li>
            <li>Personal care</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Our catagory section</h4>
          <ul>
            <li>Dairy, bread & eggs</li>
            <li>Cold drinks & juices</li>
            <li>Tea, coffee & drinks</li>
            <li>Masala, oil & more</li>
            <li>Chicken, meat & fish</li>
            <li>Paan corner</li>
            <li>Pharma & wellness</li>
            <li>Home & office</li>
            <li>Pet care</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Get to know us</h4>
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Blog</li>
            <li>Help Center</li>
            <li>Our Value</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>For Consumers</h4>
          <ul>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Product Returns</li>
            <li>FAQ</li>
            <li>Shop Checkout</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Become a Shopper</h4>
          <ul>
            <li>Shopper Opportunities</li>
            <li>Become a Shopper</li>
            <li>Earnings</li>
            <li>Ideas & Guides</li>
            <li>New Retailers</li>
          </ul>
          <h4>Freshcart programs</h4>
          <ul>
            <li>Freshcart programs</li>
            <li>Gift Cards</li>
            <li>Promos & Coupons</li>
            <li>Freshcart Ads</li>
            <li>Careers</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        {/* <div className="payment-partners">
          <strong>Payment Partners</strong>
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Amazon_logo.svg" alt="Amazon" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg" alt="Amex" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" />
        </div> */}
        <p>© 2025 - 2026 FreshCart eCommerce HTML Template. All rights reserved. Powered by <span>Srusti</span>.</p>
        {/* <div className="app-links">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/58/App_Store_%28iOS%29_logo.svg" alt="App Store" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Store_badge_EN.svg" alt="Google Play" />
        </div> */}
      </div>
    </footer>
  );
};
