import React from 'react';
import img from '../assets/1475.png';

export default function Spinner() {
  const spinnerStyles = {
    width: 60,
    height: 60,
  };
  return (
    <div className="d-flex justify-content-center mt-3">
      <img src={img} style={spinnerStyles} alt="spinner_skate" />;
    </div>
  );
}
