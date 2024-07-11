// src/SwipeableCard.js
import React from 'react';
import { useSwipeable } from 'react-swipeable';
import './swipe-card.css';

const SwipeableCard = ({ character, onSwiped }) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => onSwiped('left', character.name),
    onSwipedRight: () => onSwiped('right', character.name),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="swipeable-card">
      <div className="card" {...handlers}>
        <div className="card-content">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${character.url})` }}
          >
            <h3>{character.name}</h3>
          </div>
        </div>
      </div>
      <div className="swipe-buttons">
        <button className="left-button" onClick={() => onSwiped('left', character.name)}>Left</button>
        <button className="right-button" onClick={() => onSwiped('right', character.name)}>Right</button>
      </div>
    </div>
  );
};

export default SwipeableCard;