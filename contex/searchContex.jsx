import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const Searchprovider = ({children}) =>{

    const[search,setSearch] = useState('');//use for search functionality

    const[cart,setCart] = useState(false);// use for cart box open and close


    //add to cart logic

    const [cartItems, setCartItems] = useState([]);// used for cart items

    // logic for addto cart

        const addToCart = (item) => {
            setCartItems((prevCart) => {
                const exists = prevCart.find((i) => i.id ===item.id);

                if(exists){
                    return prevCart.map((i) => {
                        if(i.id===item.id){
                            return {...i , quantity : i.quantity+1}
                        }
                        else{
                            return i ;
                        }
                    })
                }
                else{
                    return[...prevCart,{...item, quantity : 1}]
                }
            })
        }


// remove the cart logic

const removeFromCart = (id) => {
  setCartItems((prevCart) => prevCart.filter((item) => item.id !== id));
};

//decrese the the value

const decreaseQuantity = (id) => {
  setCartItems((prevCart) =>
    prevCart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0) // remove item if quantity is 0
  );
};


    return(
        <SearchContext.Provider value={{search,setSearch,cart,setCart,addToCart,cartItems, setCartItems,removeFromCart,decreaseQuantity}}>
            {children}
        </SearchContext.Provider> 
    )
};

//create a coustm hook
export const useSearch = () => useContext(SearchContext);
