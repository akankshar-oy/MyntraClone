// swipecard.js
import React, { useState } from 'react';
import SwipeableCard from './swipeablecard';
import './swipe-card.css';

const SwipeCard = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(data.length - 1);

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' in direction ' + direction);
    setCurrentIndex((prev) => prev - 1);
  };

  const swipe = (direction) => {
    if (currentIndex >= 0) {
      const nameToDelete = data[currentIndex].name;
      console.log('removing: ' + nameToDelete + ' in direction ' + direction);
      setCurrentIndex((prev) => prev - 1);
    }
  };

  console.log('Rendering SwipeCard with currentIndex:', currentIndex);

  return (
    <div className="swipe-card-container">
      {data.map((character, index) => (
        <SwipeableCard
          key={character.name}
          character={character}
          onSwiped={swiped}
          index={index}
          currentIndex={currentIndex}
        />
      ))}
      <div className="swipe-buttons">
        <button className="left-button" onClick={() => swipe('left')}>Left</button>
        <button className="right-button" onClick={() => swipe('right')}>Right</button>
      </div>
    </div>
  );
};

export default SwipeCard;
