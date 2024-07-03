import React, { useState } from 'react';
import './Cake.css';

const Cake = () => {
  const [candles, setCandles] = useState([false, false, false, false, false]);

  const toggleCandle = (index) => {
    setCandles(candles.map((lit, i) => (i === index ? !lit : lit)));
  };

  return (
    <div className="cake">
      <div className="cake-body">
        {candles.map((lit, index) => (
          <div
            key={index}
            className={`candle ${lit ? 'lit' : 'unlit'}`}
            onClick={() => toggleCandle(index)}
          >
            <div className="flame"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cake;