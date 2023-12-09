import React from 'react';
import {Link} from 'react-router-dom';
import {useCart} from "../CartContext";
import {truncateAltDescription} from '../services/trancate_description';

const CarList = ({cars}) => {
  const {addToCart} = useCart();

  return (
    <div className="car-list">
      {cars.map((car) => (
          <div key={car.id} className="car-card">
            <Link to={`/car/${car.id}`}>
              <img src={car.urls.regular} alt={truncateAltDescription(car.alt_description)}/>
            </Link>
            <div className="car-info">
              <h3>{car.description}</h3>
              <button onClick={() => addToCart(car)}>Add to Cart</button>
            </div>
          </div>
        )
      )}
    </div>
  )
    ;
};

export default CarList;
