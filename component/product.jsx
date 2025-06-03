import '../css/product.css'
import { GrFavorite } from "react-icons/gr";
import { food_items } from '../food';
import { useSearch } from '../contex/searchContex';
import { Card } from './productCard';

export const Product = () => {

const {search,addToCart,onAddToCart} = useSearch();


//logic for search items
const list = food_items.filter(product =>
    product.food_name.toLowerCase().includes(search.toLowerCase())
);

    return(
        <>
            <div className="product-section">

                <h2>Popular Product</h2>
                <div className="product-box">
                    
                    {list.map((item) => {
                    return(
                        <Card key={item.id} item={item} onAddToCart={() => addToCart(item)}/>
                    )

                })}

                </div>

            </div>

        </>
    )
}