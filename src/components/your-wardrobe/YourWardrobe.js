// YourWardrobe.js
import React, { useState, useEffect } from 'react';
import './YourWardrobe.css';

const YourWardrobe = () => {
  const [wardrobe, setWardrobe] = useState([]);

  useEffect(() => {
    const storedWardrobe = JSON.parse(localStorage.getItem('wardrobe')) || [];
    setWardrobe(storedWardrobe);
  }, []);

  return (
    <div className="wardrobe-container">
      {wardrobe.length > 0 ? (
        wardrobe.map((item, index) => (
          <div key={index} className="wardrobe-item">
            <img src={item.url} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))
      ) : (
        <p>Your wardrobe is empty. Start swiping to add items!</p>
      )}
    </div>
  );
};

export default YourWardrobe;
