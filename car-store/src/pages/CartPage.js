import React from 'react';
import {useCart} from '../CartContext';
import {truncateAltDescription} from '../services/trancate_description';

const CartPage = () => {
  const {cart, removeFromCart} = useCart();

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((car) => (
            <div key={car.id} className="cart-item">
              <img src={car.urls.regular} alt={truncateAltDescription(car.alt_description)}/>
              <div>
                <h3>{car.description}</h3>
                <p>By {car.user.name}</p>
                <button onClick={() => removeFromCart(car.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
