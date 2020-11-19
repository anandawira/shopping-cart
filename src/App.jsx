import './App.scss';
import Header from './component/Header';
import Home from './component/Home';
import Shop from './component/Shop';
import Detail from './component/Detail';
import Checkout from './component/Checkout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [cartItems, setCartItems] = useState(new Map());

  const [itemCount, setItemCount] = useState(0);

  function addToCart(key, quantity) {
    const currentQty = cartItems.get(key) || 0;
    const newQty = currentQty + quantity;

    const newCartItems = new Map(cartItems);
    newCartItems.set(key, newQty);

    setCartItems(newCartItems);
  }

  useEffect(() => {
    let newCount = 0;
    for (let value of cartItems.values()) {
      newCount += value;
    }
    setItemCount(newCount);
    console.log(cartItems);
  }, [cartItems]);
  return (
    <Router>
      <Header itemCount={itemCount} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
        <Route
          path="/shop/:id"
          render={(props) => <Detail {...props} addToCart={addToCart} />}
        ></Route>
        <Route
          exact
          path="/checkout"
          render={(props) => <Checkout {...props} cartItems={cartItems} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
