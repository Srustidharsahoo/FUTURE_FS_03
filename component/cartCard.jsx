import { RiDeleteBin5Line } from "react-icons/ri";
import '../css/cartcard.css';
import { useSearch } from "../contex/searchContex"; // ✅ fix path!
import '../css/Toast.css';
import { useState } from "react";
// import { CiCircleQuestion } from "react-icons/ci";


export const CartCard = () => {
    const {setCart, cartItems, removeFromCart, addToCart, decreaseQuantity} = useSearch();

    const [deleteToast, setDeleteToast] = useState(false);

    const handleDelete = (id) => {
      removeFromCart(id);
      setDeleteToast(true);
      setTimeout(() => setDeleteToast(false), 3000);
    };

      

      //sub total logic

// Total quantity of all items
      const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

// Subtotal before tax/shipping/discount
      const itemSubtotal = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);

// Optional: Shipping is free if subtotal > ₹300
      const shippingFee = itemSubtotal > 299 ? 0 : 20;

// Tax is 7%
      const tax = itemSubtotal * 0.05;

// Optional: 10% discount if totalItems >= 5
      const discount = totalItems >= 5 ? itemSubtotal * 0.1 : 0;

// Grand total = subtotal - discount + tax + shipping
      const grandTotal = itemSubtotal - discount + tax + shippingFee;


    
  return (
    <>
    <div>
      {cartItems.length === 0 ? (
        <p className="empty">Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cartcard-section">
            <div className="cartcard-box1">
              <div className="cartcard-section-img">
                <img src={item.food_image} alt={item.food_name} />
              </div>

              <div className="item-name-remove-section">
                <div className="i-name">
                  <p>{item.food_name}</p>
                  <span>{item.food_quantity}</span>
                </div>

                <div className="i-remove" onClick={() => handleDelete(item.id)}>
                  <div className="delete-btn"><RiDeleteBin5Line /></div>
                  <span>Remove</span>
                </div>
              </div>
            </div>

            <div className="cartcard-box2">
              <div className="item-add-sub-section">
                <div className="sub" onClick={() => decreaseQuantity(item.id)}>-</div>
                <div className="num">{item.quantity}</div>
                <div className="add" onClick={() => addToCart(item)}>+</div>
              </div>

              <div className="item-prize-section">
                <div>₹{item.price * item.quantity}</div>
              </div>
            </div>
          </div>
        ))
      )}

      
      {deleteToast && <div className="toast">Item Deleteed successfully!</div>}


      {/* Footer should be outside map, only show when cart not empty */}
      {cartItems.length > 0 && (
        <>
        <div className="sub-total-section">

          <div className="sub-total-head">

            <div className="item-box">
              <p>Item Subtotal</p>
              <span>₹{itemSubtotal.toFixed(2)}</span>
            </div>

            <div className="item-box">
              <p>Shipping Fee {shippingFee === 0 ? "(Free upto ₹299)" : ""}</p>
              <span>₹{shippingFee.toFixed(2)}</span>
            </div>
            
            <div className="item-box">
              <p>Tax(5%)</p>
              <span>₹{tax.toFixed(2)}</span>
            </div>

          </div>

          {discount > 0 && (
            <div className="item-box">
              <p>Discount (10% off)</p>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
          )}

          <div className="sub-total-fotter">
            <div className="item-box">
              <h3>Grand Total</h3>
              <span>₹{grandTotal.toFixed(2)}</span>
            </div>
          </div>

        </div>

        
        </>
      )}
    </div>
    
    </>
  );


};
