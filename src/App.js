import React from 'react';
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
import YourWardrobe from './components/your-wardrobe/YourWardrobe';

function App() {
  const products = [
    { id: 1, title: 'H&m Collared Crop Top', image: 'Product1.png' },
    { id: 2, title: 'Only hooded sweatshirt', image: 'Product2.png' },
    { id: 3, title: 'Dressberry Heels', image: 'Product3.png' },
    { id: 4, title: 'Biba Kurta set', image: 'Product4.png' },
    { id: 5, title: 'Fablestreet Dress', image: 'Product5.png' },
    { id: 6, title: 'H&m women formal shirt', image: 'Product6.png' },
    { id: 7, title: 'H&m Shoulder bag', image: 'Product7.png' },
    { id: 8, title: 'Mango Sunglasses', image: 'Product8.png' },
    { id: 9, title: 'Mitera Saree', image: 'Product9.png' },
    { id: 10, title: 'Damensch Chino Shorts', image: 'Product10.png' },
    { id: 11, title: 'DL Women Spread Collar Shirt', image: 'Product11.png' },
    { id: 12, title: 'Rare Rabbit Shirt', image: 'Product12.png' },
    { id: 13, title: 'Trendyol Mini Skort', image: 'Product13.png' },
    { id: 14, title: 'Nike Air Force 01 Colorblocked', image: 'Product14.png' },
    // Add more products as needed
  ];

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
              <SwipeCard data={products} />
            </div>
          )} />
          <Route path={'/login'} component={LogIn} />
          <Route path={'/wishlist'} component={WishList} />
          <Route path={'/filtermen'} component={FilterMen} />
          <Route path={'/your-wardrobe'} component={() => (
            <YourWardrobe manualRelatedProducts={products.slice(0, 5)} />
          )} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
