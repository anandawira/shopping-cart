import React from 'react';
import '../style/itemCard.css';
import { Link } from 'react-router-dom';

export default function ItemCard(props) {
  return (
    <Link to={`/shop/${props.link}`}>
      <div className="itemCard">
        <img src={props.item.image} alt="gb" />
        <p className="itemName">{props.item.name}</p>
        <p className="itemPrice">${props.item.price}.00</p>
      </div>
    </Link>
  );
}
