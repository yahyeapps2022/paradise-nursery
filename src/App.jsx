import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";
import "./App.css";
import { useSelector } from "react-redux";

const App = () => {
  const cartCount = useSelector((state) => state.cart.totalQuantity);

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
                <Link to="/plants">
                  <button>Get Started</button>
                </Link>
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
