import React from 'react';
import '../style/header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h1>Shopping App</h1>
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
    </header>
  );
}
