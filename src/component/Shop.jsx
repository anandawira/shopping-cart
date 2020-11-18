import React from 'react';
import ItemCard from './ItemCard';
import items from '../items';
import '../style/shop.scss';

export default function Shop() {
  return (
    <div id="shop">
      {[...items.keys()].map((key) => {
        return <ItemCard item={items.get(key)} key={key} link={key} />;
      })}
    </div>
  );
}
