import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './swipe-card.css';

const SwipeableCard = ({ character, index, currentIndex, onSwiped }) => {
    const [swipeDirection, setSwipeDirection] = useState('');

    // Swipeable handlers for left and right swipes
    const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    // Function to handle swipe direction and trigger onSwiped callback
    const handleSwipe = (direction) => {
        setSwipeDirection(direction); // Set swipe direction for CSS animation
        onSwiped(direction, character.name); // Trigger parent component callback
    };

    // Reset swipe direction when currentIndex changes
    useEffect(() => {
        if (index !== currentIndex) {
            setSwipeDirection('');
        }
    }, [index, currentIndex]);

    return (
        <div className={`swipeable-card ${swipeDirection}`} style={{ zIndex: index === currentIndex ? 1 : 0 }}>
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
        </div>
    );
};

export default SwipeableCard;
