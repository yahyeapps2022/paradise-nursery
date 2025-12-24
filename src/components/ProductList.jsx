import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const products = [
  { id: 1, name: "Fiddle Leaf Fig", price: 20, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 18, category: "Indoor" },

  { id: 4, name: "Aloe Vera", price: 12, category: "Succulent" },
  { id: 5, name: "Jade Plant", price: 14, category: "Succulent" },
  { id: 6, name: "Cactus", price: 10, category: "Succulent" },

  { id: 7, name: "Fern", price: 16, category: "Outdoor" },
  { id: 8, name: "Palm", price: 22, category: "Outdoor" },
  { id: 9, name: "Bamboo", price: 25, category: "Outdoor" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isAdded = (id) => cartItems.some(item => item.id === id);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Plants</h2>
      {["Indoor", "Succulent", "Outdoor"].map(category => (
        <div key={category}>
          <h3>{category}</h3>
          {products
            .filter(p => p.category === category)
            .map(p => (
              <div key={p.id} className="product">
                <p>{p.name} - ${p.price}</p>
                <button
                  disabled={isAdded(p.id)}
                  onClick={() => dispatch(addToCart(p))}
                >
                  {isAdded(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
