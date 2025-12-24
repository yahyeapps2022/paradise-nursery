import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const products = [
  { id: 1, name: "Fiddle Leaf Fig", price: 20, category: "Indoor", img: "https://images.unsplash.com/photo-1593529467221-b5d3a6cddc9e" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor", img: "https://images.unsplash.com/photo-1613380199303-ff3a1c48df9c" },
  { id: 3, name: "Peace Lily", price: 18, category: "Indoor", img: "https://images.unsplash.com/photo-1612552067432-0a2b4f1ee5df" },
  { id: 4, name: "Areca Palm", price: 25, category: "Indoor", img: "https://images.unsplash.com/photo-1589961527994-77dcf244d2a3" },
  { id: 5, name: "Monstera", price: 22, category: "Indoor", img: "https://images.unsplash.com/photo-1611865141624-6c1e86a0e0f4" },
  { id: 6, name: "Rubber Plant", price: 19, category: "Indoor", img: "https://images.unsplash.com/photo-1598188301836-b8f1e1f1e3b8" },
  
  { id: 7, name: "Aloe Vera", price: 12, category: "Succulent", img: "https://images.unsplash.com/photo-1589987501323-9c7d958d5e10" },
  { id: 8, name: "Jade Plant", price: 14, category: "Succulent", img: "https://images.unsplash.com/photo-1598300050943-0e7c1d36c5c0" },
  { id: 9, name: "Cactus", price: 10, category: "Succulent", img: "https://images.unsplash.com/photo-1598360423962-7c19fa23e6a6" },
  { id: 10, name: "Echeveria", price: 11, category: "Succulent", img: "https://images.unsplash.com/photo-1602524209008-1a6d1041c12f" },
  { id: 11, name: "Haworthia", price: 13, category: "Succulent", img: "https://images.unsplash.com/photo-1612521308373-fd61ef7d82a5" },
  { id: 12, name: "Sedum", price: 9, category: "Succulent", img: "https://images.unsplash.com/photo-1587929653166-6ef273bc4c0c" },

  { id: 13, name: "Fern", price: 16, category: "Outdoor", img: "https://images.unsplash.com/photo-1616764088169-22a0fcbb0133" },
  { id: 14, name: "Palm", price: 22, category: "Outdoor", img: "https://images.unsplash.com/photo-1612949305781-7bfa8a6ee1e2" },
  { id: 15, name: "Bamboo", price: 25, category: "Outdoor", img: "https://images.unsplash.com/photo-1612658417753-3a7b5cbe29d0" },
  { id: 16, name: "Boxwood", price: 20, category: "Outdoor", img: "https://images.unsplash.com/photo-1612776785767-abc3b64d9b13" },
  { id: 17, name: "Hydrangea", price: 18, category: "Outdoor", img: "https://images.unsplash.com/photo-1612782341987-5f7c3a111ef6" },
  { id: 18, name: "Lavender", price: 15, category: "Outdoor", img: "https://images.unsplash.com/photo-1612726238141-94b2a0e5c4b5" },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = (id) => cartItems.some(item => item.id === id);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Plants</h2>
      {["Indoor", "Succulent", "Outdoor"].map(category => (
        <div key={category}>
          <h3>{category}</h3>
          {products.filter(p => p.category === category).map(p => (
            <div key={p.id} className="product">
              <img src={p.img} alt={p.name} width="100" />
              <p>{p.name} - ${p.price}</p>
              <button
                disabled={isAdded(p.id)}
                onClick={() => dispatch(addItem(p))}
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
