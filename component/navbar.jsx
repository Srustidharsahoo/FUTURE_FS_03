import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { BsCart3 } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import logo from '../assets/freshcart-logo.svg';
import '../css/navbar.css'
import { useSearch } from "../contex/searchContex";

export const Nav = () => {

    const {search,setSearch,cart,setCart,cartItems} = useSearch();


    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


    return(
        <>
        
        <div className="navbar-section">

            <div className="navbar-logo">
            <img src={logo} alt="logo" />
            </div>

            <div className="search-loc-section">

                <div className="searchbar-section">
                    <input type="text" placeholder="Search for products" value={search} onChange={(e)=>setSearch(e.target.value)}/>
                </div>

                <div className="location-section">
                    <div className="loc-icon"><CiLocationOn /></div>
                    <div className="loc">Location</div>
                </div>

            </div>

            <div className="icon-section">
                <GrFavorite className="icon-btn"/>
                <IoPersonOutline className="icon-btn" />
                
                <div className="cart-icon-container">
                    <BsCart3  onClick={()=>setCart(true)} className="cart-icon" />
                    {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
                </div>

            </div>

        </div>

        </>
    )
}