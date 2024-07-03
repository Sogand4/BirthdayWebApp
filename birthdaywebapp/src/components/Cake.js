import React, { useState } from 'react';
import './Cake.css';

const Cake = () => {
  const [candles, setCandles] = useState([false, false, false, false, false]);

  const toggleCandle = (index) => {
    setCandles(candles.map((lit, i) => (i === index ? !lit : lit)));
  };

  return (
    <div className="cake">
    {candles.map((lit, index) => (
        <div
        key={index}
        className={`candle ${lit ? 'lit' : 'unlit'}`}
        onClick={() => toggleCandle(index)}
        style={{ left: `${20 + index * 20}%` }}
        >
        <div className="flame"></div>
        </div>
    ))}
    </div>
  );
};

export default Cake;