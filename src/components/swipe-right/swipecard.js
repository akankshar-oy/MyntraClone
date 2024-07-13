// swipeablecard.js
import React, { useState } from 'react';
import SwipeableCard from './swipeablecard';
import './swipe-card.css';

const SwipeCard = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(data.length - 1);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' in direction ' + direction);
    const swipedItem = data.find(item => item.name === nameToDelete);

    let wardrobe = JSON.parse(localStorage.getItem('wardrobe')) || [];

    if (direction === 'right') {
      wardrobe.push(swipedItem);
    } else if (direction === 'left') {
      // Optionally handle 'left' swipes if needed
    }

    localStorage.setItem('wardrobe', JSON.stringify(wardrobe));
    setCurrentIndex((prev) => prev - 1);
  };

  const swipe = (direction) => {
    if (currentIndex >= 0) {
      const nameToDelete = data[currentIndex].name;
      swiped(direction, nameToDelete);
    }
  };

  console.log('Rendering SwipeCard with currentIndex:', currentIndex);

  return (
    <div className="swipe-card-container all-container">
      <div className="cards-container">
        {data.map((character, index) => (
          <SwipeableCard
            key={character.name}
            character={character}
            onSwiped={swiped}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </div>
      <div className="swipe-buttons all-container">
        <button className="left-button" onClick={() => swipe('left')}>Left</button>
        <button className="right-button" onClick={() => swipe('right')}>Right</button>
      </div>
    </div>
  );
};

export default SwipeCard;
