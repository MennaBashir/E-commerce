import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Login from './Pages/Login';
import Cart from "./Pages/Cart";
import bannerMen from "./Assets/banner_mens.png";
import bannerWomen from "./Assets/banner_women.png";
import bannerKids from "./Assets/banner_kids.png";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory category="men" banner={bannerMen} />} />
        <Route path="/womens" element={<ShopCategory category="women" banner={bannerWomen} />} />
        <Route path="/kids" element={<ShopCategory category="kid" banner={bannerKids} />} />
        <Route path="/product/:productID" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
