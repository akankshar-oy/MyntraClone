import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './swipe-card.css';

const SwipeableCard = ({ character, onSwiped, index, currentIndex }) => {
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

    useEffect(() => {
        if (index === currentIndex) {
            setSwipeDirection('');
        }
    }, [currentIndex, index]);

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
