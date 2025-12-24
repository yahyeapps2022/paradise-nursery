import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  { id: 1, name: "Fiddle Leaf Fig", price: 25, thumbnail: "https://via.placeholder.com/80" },
  { id: 2, name: "Snake Plant", price: 15, thumbnail: "https://via.placeholder.com/80" },
  { id: 3, name: "Monstera", price: 30, thumbnail: "https://via.placeholder.com/80" },
  { id: 4, name: "Peace Lily", price: 20, thumbnail: "https://via.placeholder.com/80" },
  { id: 5, name: "Aloe Vera", price: 12, thumbnail: "https://via.placeholder.com/80" },
  { id: 6, name: "Spider Plant", price: 10, thumbnail: "https://via.placeholder.com/80" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  const isAdded = (productId) => cartItems.some((item) => item.id === productId);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={product.thumbnail} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button
            disabled={isAdded(product.id)}
            onClick={() => dispatch(addItem(product))}
          >
            {isAdded(product.id) ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
