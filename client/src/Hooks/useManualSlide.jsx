// src/hooks/useInfiniteScroll.js
import { useRef, useEffect } from 'react';

export const useManualSlide = (slideAmount = 500) => {
    const sliderRef = useRef(null);

    const slideLeft = () => {
        const slider = sliderRef.current;
        if (slider.scrollLeft <= 0) {
            slider.scrollLeft = slider.scrollWidth / 2;
        }
        slider.scrollLeft -= slideAmount;
    };

    const slideRight = () => {
        const slider = sliderRef.current;
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
            slider.scrollLeft = 0;
        } else {
            slider.scrollLeft += slideAmount;
        }
    };



    return { sliderRef, slideLeft, slideRight };
};
