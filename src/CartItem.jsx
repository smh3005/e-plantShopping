import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateQuantity,
  removeItem,
} from "./CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    alert("Coming Soon! Checkout will be available shortly.");
  };

  return (
    <main className="cart-page">
      <section className="cart-header-section">
        <p className="eyebrow">YOUR SHOPPING CART</p>
        <h1>Plants you selected</h1>
        <p>
          {totalItems} {totalItems === 1 ? "plant" : "plants"} in your cart
        </p>
      </section>

      {items.length === 0 ? (
        <section className="empty-cart">
          <div className="empty-icon">🪴</div>
          <h2>Your cart is empty</h2>
          <p>Add a few beautiful plants and they will appear here.</p>
          <Link to="/plants" className="primary-button">
            Continue Shopping
          </Link>
        </section>
      ) : (
        <section className="cart-layout">
          <div className="cart-items">
            {items.map((item) => {
              const itemTotal = item.price * item.quantity;

              return (
                <article className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-image" />

                  <div className="cart-item-details">
                    <h2>{item.name}</h2>
                    <p>Unit price: ₹{item.price.toFixed(2)}</p>

                    <div className="quantity-row">
                      <span className="quantity-label">Quantity:</span>
                      <button
                        type="button"
                        className="quantity-button"
                        onClick={() =>
  dispatch(
    updateQuantity({
      id: item.id,
      quantity: item.quantity - 1,
    })
  )
}
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        −
                      </button>
                      <strong>{item.quantity}</strong>
                      <button
                        type="button"
                        className="quantity-button"
                        onClick={() =>
  dispatch(
    updateQuantity({
      id: item.id,
      quantity: item.quantity + 1,
    })
  )
}
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        +
                      </button>
                    </div>

                    <p className="item-total">
                      Total: <strong>₹{itemTotal.toFixed(2)}</strong>
                    </p>
                  </div>

                  <button
                    type="button"
                    className="delete-button"
                    onClick={() => dispatch(removeItem(item.id))}
                    aria-label={`Delete ${item.name}`}
                  >
                    Delete
                  </button>
                </article>
              );
            })}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Total plants</span>
              <strong>{totalItems}</strong>
            </div>
            <div className="summary-row grand-total">
              <span>Total cost</span>
              <strong>₹{totalAmount.toFixed(2)}</strong>
            </div>

            <button
              type="button"
              className="checkout-button"
              onClick={handleCheckout}
            >
              Checkout
            </button>

            <Link to="/plants" className="continue-button">
              Continue Shopping
            </Link>
          </aside>
        </section>
      )}
    </main>
  );
}