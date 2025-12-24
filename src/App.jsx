import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const App = () => {
  const cartCount = useSelector(state => state.cart.totalQuantity);
  const [showProducts, setShowProducts] = useState(false);

  return (
    <BrowserRouter>
      <div className="app">
        <div className="navbar">
          <div>
            <Link to="/">Home</Link>
            <Link to="/plants">Plants</Link>
            <Link to="/cart">Cart ({cartCount})</Link>
          </div>
        </div>

        <Routes>
          <Route
            path="/"
            element={
              <div style={{ padding: "20px", color: "white" }}>
                <h1>Paradise Nursery</h1>
                <button onClick={() => setShowProducts(true)}>Get Started</button>
                {showProducts && <ProductList />}
              </div>
            }
          />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
