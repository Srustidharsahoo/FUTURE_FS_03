import { useEffect, useState } from "react";
import { food_items } from "../food"; // ✅ Make sure the path is correct
import { Card } from "../component/productCard"; // ✅ Adjust if you use a different name
import { useSearch } from "../contex/searchContex";
import { Nav } from "../component/navbar";
import { Feature } from "../component/feature";
import { Fotter } from "../component/fotter";

export const Oil = () => {
  const [oilList, setOilList] = useState([]);
  const { addToCart ,search} = useSearch();

  useEffect(() => {
    // Filter items where category is 'Fruits'
    const Oils = food_items.filter((item) => item.food_category === "Oil");
    setOilList(Oils);
  }, []);


  // ✅ Filter fruitList based on search text
  const filteredOil = oilList.filter((item) =>
    item.food_name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
    <Nav />
    <div className="product-section">
      <h2>Oil and Ghee Items</h2>
      <div className="product-box">
        {filteredOil.length > 0 ? (
          filteredOil.map((item) => (
            <Card key={item.id} item={item} onAddToCart={() => addToCart(item)}/>
          ))
        ) : (
          <p>No fruit items found.</p>
        )}
      </div>
    </div>

        <Feature />
        <Fotter />
    </>
  );
};
