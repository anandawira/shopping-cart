import React from 'react';
import '../style/detail.css';
import items from '../items';
import cartIcon from '../assets/shopping_cart-white-18dp.svg'

export default function Detail({ match }) {
  const key = parseInt(match.params.id);
  const item = items.get(key);
  return (
    <div id="detail">
      <img id='prodImg' src={item.image} alt="product" />
      <div id="info">
        <h1>{item.name}</h1>
        <p>${item.price}.00</p>
        <div id="addBtn">
          <img src={cartIcon} alt="add"/>
          <p>ADD TO CART</p>
        </div>
      </div>
    </div>
  );
}
