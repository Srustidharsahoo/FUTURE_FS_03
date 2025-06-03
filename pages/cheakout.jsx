// Cheakout.jsx
import { CartCard } from "../component/cartCard";
import { Fotter } from "../component/fotter";
import "../css/cheakout.css";
import { Accordion } from "../component/accordion";
import { Nav } from "../component/navbar";
import { useNavigate } from "react-router"; 

export const Cheakout = () => {

    const navigate = useNavigate();
  
    const handleOrder = () => {
        navigate("/order");

    };

  return (
    <>
    <Nav />    
    <div className="cheakout-section">
      <div className="cheakout-head">
        <h1>CHECKOUT</h1>
      </div>

        <div className="cheakout-body">
            
            <div className="address-box">
                <Accordion />
            </div>

            <div className="delivery-items">
            <CartCard />
            </div>

        </div>

        <div className="conform-order" onClick={handleOrder}>
            <button>Conform Order</button>
        </div>

      <div className="cheakout-fotter">
        <Fotter />
      </div>

    </div>
    </>
  );
};
