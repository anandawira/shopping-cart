import React from 'react';
import itemList from '../itemList';
import ItemCard from './ItemCard';
import '../style/shop.css';

export default function Shop() {
  return (
    <div id="shop">
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}
