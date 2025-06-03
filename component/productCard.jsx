import { useSearch } from '../contex/searchContex';
import '../css/product.css'
import { GrFavorite } from "react-icons/gr";
import '../css/Toast.css';
import { useState } from 'react';


export const Card = ({item,onAddToCart}) =>{

    const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    onAddToCart(item);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Toast disappears after 3 seconds
  };


    return(
        <>
            <div className="image-box" key={item.id || item.food_name}>

                <div className="image-section">
                    <img src={item.food_image} alt="" />
                </div>

                <div className="image-name">
                    <p>{item.food_name}</p>
                </div>

                <div className="item-quantity">
                    <p>{item.food_quantity}</p>
                </div>
                <div className="item-rate">
                    <p>₹{item.price}</p>
                </div>

                <div className="cart-section">
                    <div className="btn">
                        <button onClick={handleClick}>Add +</button>
                    </div>

                    <div className="like">
                        <GrFavorite />
                    </div>
                </div>
            </div>

            {showToast && <div className="toast">Item added successfully!</div>}

        </>
    )
}