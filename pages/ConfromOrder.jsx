// OrderSuccess.jsx
import '../css/orderconform.css';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Conform = () => {
  return (
    <div className="order-success">
      <FaCheckCircle className="success-icon" />
      <h1>Thank you for your purchase!</h1>
      <p>Your order has been placed successfully.</p>
      <p className="order-id">Order ID: #123456789</p>
      <Link to="/" className="home-button">Continue Shopping</Link>
    </div>
  );
};
