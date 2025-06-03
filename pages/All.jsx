import { useEffect, useState } from "react";
import { food_items } from "../food"; // ✅ Make sure the path is correct
import { Card } from "../component/productCard"; // ✅ Adjust if you use a different name
import { useSearch } from "../contex/searchContex";
import { Nav } from "../component/navbar";
import { Feature } from "../component/feature";
import { Fotter } from "../component/fotter";

export const All = () => {
  const [allList, setAllList] = useState([]);
  const { addToCart ,search} = useSearch();

  useEffect(() => {
    // Filter items where category is 'All'
    const AllItem = food_items.filter((item) => item.food_category === "All");
    setAllList(food_items);
  }, []);


  // ✅ Filter fruitList based on search text
  const filteredAll = allList.filter((item) =>
    item.food_name.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <>
    <Nav />
    <div className="product-section">
      <h2>All Items</h2>
      <div className="product-box">
        {filteredAll.length > 0 ? (
          filteredAll.map((item) => (
            <Card key={item.id} item={item} onAddToCart={() => addToCart(item)}/>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </div>

        <Feature />
        <Fotter />
    </>
  );
};
