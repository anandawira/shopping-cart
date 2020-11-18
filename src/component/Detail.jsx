import React from 'react';
import '../style/detail.scss';
import items from '../items';
import { FaShoppingCart } from 'react-icons/fa';

export default function Detail({ match }) {
  const key = parseInt(match.params.id);
  const item = items.get(key);
  return (
    <div id="detail">
      <img id="prodImg" src={item.image} alt="product" />
      <div id="info">
        <h1>{item.name}</h1>
        <p>${item.price}.00</p>
        <div id="addBtn">
          <FaShoppingCart id="cartIcon" />
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
}
