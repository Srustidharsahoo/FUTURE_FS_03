import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Cart } from './pages/cart';
import { Fruit } from './pages/FruitPage';
import { Product } from './component/product'; // ✅ make sure file and export match
import { Vegetable } from './pages/VegetablePage';
import { All } from './pages/All';
import { BreadEgg } from './pages/BreadEggPage';
import { Oil } from './pages/oilPage';
import { Cheakout } from './pages/cheakout';
import { Conform } from './pages/ConfromOrder';
import { NewAddress } from './pages/NewAddress';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/All" element={<All />} />
      <Route path="/fruits" element={<Fruit />} /> {/* ✅ Add this here */}
      <Route path="/vegetables" element={<Vegetable />} />
      <Route path="/bread" element={<BreadEgg />} />
      <Route path="/oil" element={<Oil />} />
      <Route path="/cheakout" element={<Cheakout />} />
      <Route path="/order" element={<Conform />} />
      <Route path="/address" element={<NewAddress />} />
    </Routes>

    <Cart />
    </>
  );
};

export default App;
