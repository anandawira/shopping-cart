import React from 'react';
import '../style/detail.scss';
import items from '../items';
import { FaShoppingCart } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

export default function Detail(props) {
  const { goBack } = useHistory();
  const key = parseInt(props.match.params.id);
  const item = items.get(key);
  return (
    <div id="detail">
      <img id="prodImg" src={item.image} alt="product" />
      <div id="info">
        <h1>{item.name}</h1>
        <p>${item.price}.00</p>
        <div id="addBtn" onClick={() => props.addToCart(key, 1)}>
          <FaShoppingCart id="cartIcon" />
          <p>ADD TO CART</p>
        </div>
        <p id="backBtn" onClick={goBack}>{`< BACK`}</p>
      </div>
    </div>
  );
}
