import React, { useEffect, useRef, useState } from 'react';

function Counter({ count, speed = 500 }: { count: number; speed?: number }) {
    const timer = useRef({ start: Date.now() });
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (count > 0) {
            timer.current.start = Date.now();
            setCounter(0);
        }
    }, [count]);

    useEffect(() => {
        if (counter < count) {
            const timeElapsed = Date.now() - timer.current.start;
            const timePerNum = speed / count;
            const currentCount = Math.round(timeElapsed / timePerNum);

            let newCount = currentCount + 1;
            if (newCount > count) newCount = count;

            setTimeout(() => {
                setCounter(newCount);
            }, 50);
        }
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    timer.current.start = Date.now();
                    setCounter(0);
                }
            },
            { threshold: 0.1 },
        );
        const counterElement = document.querySelector('.counter');
        if (counterElement) {
            observer.observe(counterElement);
        }
    }, []);

    return (
        <h2 className="text-5xl lg:text-6xl counter font-bold transition duration-300 ease-in-out">
            {Intl.NumberFormat('en-EN').format(counter)}
        </h2>
    );
}

export default Counter;
