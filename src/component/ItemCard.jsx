import React from 'react';
import '../style/itemCard.css';
import image01 from '../assets/images01.webp';

export default function ItemCard() {
  return (
    <div className="itemCard">
      <img src={image01} alt="gb" />
      <p>Jordan Jumpman 2021 PF</p>
    </div>
  );
}
