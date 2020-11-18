import React, { useState } from 'react';
import '../style/header.scss';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

export default function Header() {
  const [cart, setCart] = useState(0);
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
        <p id="cartCount" onClick={() => setCart(cart + 1)}>
          {cart}
        </p>
      </div>
    </header>
  );
}
