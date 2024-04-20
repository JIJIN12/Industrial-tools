import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Nav from "./components/Nav/Nav";
import Shop from "./pages/Shop";
import banner1 from './components/Assets/images/banner1.jpg'
import banner2 from './components/Assets/images/banner2.jpeg'
import Footer from "./components/Footer/Footer";
import Popular from "./components/Popular/Popular";
import TrackOrder from "./components/new collection/TrackOrder/TrackOrder";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Shop />} />
        <Route path="/:category" element={<ShopCategory banner={banner1} category="construction_tool" />} />
        <Route path="/:category" element={<ShopCategory banner={banner2} category="agricultural_tool" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
