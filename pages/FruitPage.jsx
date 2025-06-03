import { useEffect, useState } from "react";
import { food_items } from "../food"; // ✅ Make sure the path is correct
import { Card } from "../component/productCard"; // ✅ Adjust if you use a different name
import { useSearch } from "../contex/searchContex";
import { Nav } from "../component/navbar";
import { Feature } from "../component/feature";
import { Fotter } from "../component/fotter";

export const Fruit = () => {
  const [fruitList, setFruitList] = useState([]);
  const { addToCart ,search} = useSearch();

  useEffect(() => {
    // Filter items where category is 'Fruits'
    const fruits = food_items.filter((item) => item.food_category === "Fruits");
    setFruitList(fruits);
  }, []);


  // ✅ Filter fruitList based on search text
  const filteredFruits = fruitList.filter((item) =>
    item.food_name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
    <Nav />
    <div className="product-section">
      <h2>Fruit Items</h2>
      <div className="product-box">
        {filteredFruits.length > 0 ? (
          filteredFruits.map((item) => (
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
