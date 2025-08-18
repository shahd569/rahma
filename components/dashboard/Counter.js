"use client"
import { useEffect, useState } from 'react';

const Counter = ({ targetNumber }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = targetNumber;
    const duration = 2000; // مدة الأنيميشن بالمللي ثانية
    const incrementTime = (duration / end) * 1000 ; // الوقت بين كل زيادة

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) {
        clearInterval(counter);
      }
    }, incrementTime);

    return () => clearInterval(counter);
  }, [targetNumber]);

  return <div>{count}</div>;
};

export default Counter;
