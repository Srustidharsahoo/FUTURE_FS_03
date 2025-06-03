import { useEffect, useState } from "react";
import { food_items } from "../food"; // ✅ Make sure the path is correct
import { Card } from "../component/productCard"; // ✅ Adjust if you use a different name
import { useSearch } from "../contex/searchContex";
import { Nav } from "../component/navbar";
import { Feature } from "../component/feature";
import { Fotter } from "../component/fotter";

export const BreadEgg = () => {
  const [breadList, setBreadList] = useState([]);
  const { addToCart } = useSearch();

  useEffect(() => {
    // Filter items where category is 'Fruits'
    const Bread = food_items.filter((item) => item.food_category === "Bread");
    setBreadList(Bread);
  }, []);

  return (
    <>
    <Nav />
    <div className="product-section">
      <h2>Bread and Egg Items</h2>
      <div className="product-box">
        {breadList.length > 0 ? (
          breadList.map((item) => (
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
