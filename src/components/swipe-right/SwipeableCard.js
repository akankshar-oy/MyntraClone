import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './swipe-card.css';

const SwipeableCard = ({ character, onSwiped }) => {
    const [swipeDirection, setSwipeDirection] = useState('');

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            setSwipeDirection('left');
            onSwiped('left', character.name);
        },
        onSwipedRight: () => {
            setSwipeDirection('right');
            onSwiped('right', character.name);
        },
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div className={`swipeable-card ${swipeDirection}`}>
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
                <button
                    className="left-button"
                    onClick={() => {
                        setSwipeDirection('left');
                        onSwiped('left', character.name);
                    }}
                >
                    Left
                </button>
                <button
                    className="right-button"
                    onClick={() => {
                        setSwipeDirection('right');
                        onSwiped('right', character.name);
                    }}
                >
                    Right
                </button>
            </div>
        </div>
    );
};

export default SwipeableCard;
