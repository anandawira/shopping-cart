import React from 'react';
import items from '../items';
import ItemCard from './ItemCard';
import '../style/checkout.scss';

export default function Checkout(props) {
  const { cartItems } = props;
  console.log(cartItems);
  return (
    <div id="checkout">
      <div id="cartItems">
        {[...cartItems.keys()].map((key) => {
          return <ItemCard item={items.get(key)} key={key} link={key}>
              <div id="quantity">ahahahahaha</div>
          </ItemCard>;
        })}
      </div>
      {cartItems.size===0 ? <div id='emptyCartInfo'><p>Your Cart is Empty<br/>Let's Add Some Items</p></div> : ''}
      {/* <div id='emptyCartInfo'><p>Your Cart is Empty<br/>Let's Add Some Items</p></div> */}
    </div>
  );
}
