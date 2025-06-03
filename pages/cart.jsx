import '../css/Cart.css'
import { RxCross1 } from "react-icons/rx";
import { useSearch } from '../contex/searchContex';
import { CartCard } from '../component/cartCard';
import { useNavigate } from 'react-router';

export const Cart = () => {

    const { cart,setCart } = useSearch();
    const navigate = useNavigate();

    const handleContinue = () => {
        setCart(false)
        navigate("/all");          
      }

      //clickevent for cheakout page

    const handleCheakout = () => {
        navigate("/cheakout");
        setCart(false)

    };

    return(
        <div className={`shopcart-section ${cart ? 'open' : 'closed'}`}>
            <div className="cart-header">

                <div className="cart-name">
                    <h2>Shop Cart</h2>
                </div>

                <div className="cart-exit">
                    <RxCross1  onClick={()=>setCart(false)}/>
                </div>

            </div>


            <CartCard />

        <div className="cartcard-fotter">
          <div className="continue-shop"  onClick={handleContinue}>Continue Shopping</div>
          <div className="cheakout-shop" onClick={handleCheakout}>Proceed To Checkout</div>
        </div>


        </div>
    )
}