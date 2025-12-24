import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQuantity, removeItem } from "../redux/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} width={80} />
            <div>{item.name}</div>
            <div>Unit Price: ${item.price}</div>
            <div>
              <button
                onClick={() =>
                  item.quantity > 1 &&
                  dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                }
              >
                -
              </button>
              {item.quantity}
              <button
                onClick={() =>
                  dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                }
              >
                +
              </button>
            </div>
            <button onClick={() => dispatch(removeItem(item.id))}>Remove</button>
            <div>Total: ${item.price * item.quantity}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default CartItem;
