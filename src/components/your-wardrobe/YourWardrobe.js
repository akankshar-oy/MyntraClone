import React, { useState, useEffect } from 'react';
import './YourWardrobe.css';

// Manually added related products
const manualRelatedProducts = [
  { name: 'Related Product 1', url: './images/Related1.png' },
  { name: 'Related Product 2', url: './images/Related2.png' },
  { name: 'Related Product 3', url: './images/Related3.png' },
  { name: 'Related Product 4', url: './images/Related4.png' },
  { name: 'Related Product 5', url: './images/Related5.png' },
  { name: 'Related Product 6', url: './images/Related6.png' },
  { name: 'Related Product 7', url: './images/Related7.png' },
  { name: 'Related Product 8', url: './images/Related8.png' },
  { name: 'Related Product 9', url: './images/Related9.png' },
  { name: 'Related Product 10', url: './images/Related10.png' },
  { name: 'Related Product 11', url: './images/Related11.png' },
  { name: 'Related Product 12', url: './images/Related12.png' },
  { name: 'Related Product 13', url: './images/Related13.png' },
  { name: 'Related Product 14', url: './images/Related14.png' },
];

const YourWardrobe = () => {
  const [wardrobe, setWardrobe] = useState([]);

  useEffect(() => {
    const storedWardrobe = JSON.parse(localStorage.getItem('wardrobe')) || [];
    setWardrobe(storedWardrobe);
  }, []);

  useEffect(() => {
    console.log('Wardrobe:', wardrobe);
    console.log('Related Products:', manualRelatedProducts);
  }, [wardrobe]);

  return (
    <div className="wardrobe-container">
      {wardrobe.length > 0 ? (
        <>
          {wardrobe.map((item, index) => (
            <div key={index} className="wardrobe-item">
              <img src={item.url} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
          <h2>Related Products</h2>
          {manualRelatedProducts.map((item, index) => (
            <div key={index} className="wardrobe-item">
              <img src={item.url} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))}
        </>
      ) : (
        <p>Your wardrobe is empty. Start swiping to add items!</p>
      )}
    </div>
  );
};

export default YourWardrobe;
