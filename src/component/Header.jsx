import React from 'react';
import '../style/header.scss';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header(props) {
  return (
    <header>
      <h1>NSFW SHOP</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
        </ul>
      </nav>
      <div id="cart">
        <FaShoppingCart id="cartIcon" />
        <p id="cartCount">{props.itemCount}</p>
      </div>
    </header>
  );
}
