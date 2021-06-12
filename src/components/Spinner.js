import React from 'react';
import img from '../assets/1475.png';

export default function Spinner() {
  const spinerStyles = {
    width: 70,
    height: 50,
  };
  return (
    <div className={`d-flex justify-content-center`}>
      <img src={img} style={spinerStyles} />;
    </div>
  );
}
