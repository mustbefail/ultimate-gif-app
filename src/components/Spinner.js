import React from 'react';
import img from '../assets/1475.png';

export default function Spinner() {
  const spinnerStyles = {
    width: 70,
    height: 50,
  };
  return (
    <div className="d-flex justify-content-center">
      <img src={img} style={spinnerStyles} alt="spinner_skate" />;
    </div>
  );
}
