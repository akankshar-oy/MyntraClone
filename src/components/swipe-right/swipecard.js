import React, { useState, useEffect } from 'react';
import SwipeableCard from './SwipeableCard';
import './swipe-card.css';

// Import images
import Product1 from './images/Product1.png';
import Product2 from './images/Product2.png';
import Product3 from './images/Product3.png';
import Product4 from './images/Product4.png';
import Product5 from './images/Product5.png';
import Product6 from './images/Product6.png';
import Product7 from './images/Product7.png';
import Product8 from './images/Product8.png';
import Product9 from './images/Product9.png';
import Product10 from './images/Product10.png';
import Product11 from './images/Product11.png';
import Product12 from './images/Product12.png';
import Product13 from './images/Product13.png';
import Product14 from './images/Product14.png';

// Sample product data with imported images
const sampleProducts = [
  { id: 1, name: 'H&m Collared Crop Top', url: Product1, link: 'https://www.myntra.com/tops/h&m/hm-collared-cropped-top/26790074/buy' },
  { id: 2, name: 'Only hooded sweatshirt', url: Product2, link: 'https://www.myntra.com/sweatshirts/only/only-hooded-crop-front-open-sweatshirt/26192646/buy' },
  { id: 3, name: 'Dressberry Heels', url: Product3, link: 'https://www.myntra.com/heels/dressberry/dressberry-cream-coloured-bow-detailed-stiletto-heels--/29503372/buy' },
  { id: 4, name: 'Biba Kurta set', url: Product4, link: 'https://www.myntra.com/kurta-sets/biba/biba-floral-printed-round-neck-three-quarter-sleeves-kurta-set/26878938/buy' },
  { id: 5, name: 'Fablestreet Dress', url: Product5, link: 'https://www.myntra.com/dresses/fablestreet/fablestreet-women-cotton-white-solid-button-down-a-line-midi-dress/14935136/buy' },
  { id: 6, name: 'H&m women formal shirt', url: Product6, link: 'https://www.myntra.com/shirts/h%26m/hm-women-white-formal-shirt/13908196/buy' },
  { id: 7, name: 'H&m Shoulder bag', url: Product7, link: 'https://www.myntra.com/handbags/h%26m/hm-shoulder-bag-and-pouch/23486348/buy' },
  { id: 8, name: 'Mango Sunglasses', url: Product8, link: 'https://www.myntra.com/sunglasses/mango/mango-women-square-sunglasses-with-uv-protected-lens-67035986/28914442/buy' },
  { id: 9, name: 'Mitera Saree', url: Product9, link: 'https://www.myntra.com/sarees/mitera/mitera-pink--white-ombre-pure-chiffon-saree/24218850/buy' },
  { id: 10, name: 'Damensch Chino Shorts', url: Product10, link: 'https://www.myntra.com/shorts/damensch/damensch-premium-cotton-yarn-dye-chino-shorts/18888868/buy' },
  { id: 11, name: 'DL Women Spread Collar Shirt', url: Product11, link: 'https://www.myntra.com/shirts/dl+woman/dl-woman-spread-collar-casual-oversized-shirt/26171658/buy' },
  { id: 12, name: 'Rare Rabbit Shirt', url: Product12, link: 'https://www.myntra.com/shirts/rare+rabbit/rare-rabbit-men-i-love-u-black-custom-slim-fit-shirt/16713130/buy' },
  { id: 13, name: 'Trendyol Mini Skort', url: Product13, link: 'https://www.myntra.com/skirts/trendyol/trendyol-overlap-panel-mini-skort-skirt/22694898/buy' },
  { id: 14, name: 'Nike Air Force 01 Colorblocked', url: Product14, link: 'https://www.myntra.com/casual-shoes/nike/nike-women-air-force-1-07-colorblocked-sneakers/25145256/buy' },

];

const SwipeCard = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setProducts(sampleProducts);
  }, []);

  const handleSwipe = (direction, name) => {
    console.log(`Swiped ${direction} on ${name}`);
    if (direction === 'right') {
      const swipedProduct = products[currentIndex];
      const storedWardrobe = JSON.parse(localStorage.getItem('wardrobe')) || [];
      localStorage.setItem('wardrobe', JSON.stringify([...storedWardrobe, swipedProduct]));
    }
    if (currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Restart from the first product if at the end
    }
  };

  const swipeLeft = () => {
    handleSwipe('left', products[currentIndex].name);
  };

  const swipeRight = () => {
    handleSwipe('right', products[currentIndex].name);
  };

  return (
    <div className="swipe-card-container">
      {products.length > 0 && (
        <SwipeableCard
          key={products[currentIndex].id}
          character={products[currentIndex]}
          onSwiped={handleSwipe}
          index={currentIndex}
          currentIndex={currentIndex}
        />
      )}
      <div className="swipe-buttons">
        <button className="left-button" onClick={swipeLeft}>Left</button>
        <button className="right-button" onClick={swipeRight}>Right</button>
      </div>
    </div>
  );
};

export default SwipeCard;
