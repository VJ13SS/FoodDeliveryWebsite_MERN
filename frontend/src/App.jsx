import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Cart from "./pages/cart/cart";
import PlaceOrder from "./pages/placeOrder/placeorder";
import Footer from "./components/footer/footer";
import { useState } from "react";
import LoginPopup from "./components/loginPopup/loginPopup";
import StoreContextProvider from "./context/storeContext";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  console.log('hello')
  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cart"
            element={
              
                <Cart />
              
            }
          />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
