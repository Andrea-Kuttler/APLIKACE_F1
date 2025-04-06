// components/Header.js
import React from 'react';
import Buttons from './Buttons';

function Header({ onLoadRaces, onLoadDrivers }) {
  return (
    <div className="container">
      <div className="aplikace">
        <h1>F1 Závody 2024</h1>
        <Buttons onLoadRaces={onLoadRaces} onLoadDrivers={onLoadDrivers} /> {/* Použijeme komponentu Buttons */}
      </div>
    </div>
  );
}

export default Header;
