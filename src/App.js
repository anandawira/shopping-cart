import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import Shop from './component/Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
