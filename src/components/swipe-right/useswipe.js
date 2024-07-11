import { useSwipeable } from 'react-swipeable';

const useSwipe = (onSwipedLeft, onSwipedRight) => {
    return useSwipeable({
        onSwipedLeft,
        onSwipedRight,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });
};

export default useSwipe;