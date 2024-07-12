import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/body/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import MenBody from './components/Men.js/MenBody';
import WomenBody from './components/women/WomenBody';
import KidsBody from './components/kids/KidsBody';
import HomeAndLiving from './components/homeAndLiving/HomeAndLiving';
import LogIn from './components/login/LogIn';
import WishList from './components/wishlist/WishList';
import FilterMen from './components/filter/FilterMen';
import SwipeCard from './components/swipe-right/swipecard';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route path={'/men'} component={MenBody} />
          <Route path={'/women'} component={WomenBody} />
          <Route path={'/kids'} component={KidsBody} />
          <Route path={'/homeandliving'} component={HomeAndLiving} />
          <Route path={'/swipe-right'} component={() => (
            <div className="swipe-container">
              <SwipeCard data={products.map(item => ({
                name: item.title,
                url: item.image
              }))} />
            </div>
          )} />
          <Route path={'/login'} component={LogIn} />
          <Route path={'/wishlist'} component={WishList} />
          <Route path={'/filtermen'} component={FilterMen} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
