// components/Header.js
import React, { useState } from 'react';
import Buttons from './Buttons';
import Dropdown from './Dropdown';

function Header({ onLoadRaces, onLoadDrivers }) {
  const [selectedYear, setSelectedYear] = useState(2024);

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleLoadRaces = () => {
    if (onLoadRaces) {
      onLoadRaces(selectedYear);
    }
  };

  const handleLoadDrivers = () => {
    if (onLoadDrivers) {
      onLoadDrivers(selectedYear);
    }
  };

  return (
    <div className="container">
      <div className="aplikace">
        <h1>F1 Závody {selectedYear}</h1>
        <Dropdown onYearChange={handleYearChange} defaultYear={selectedYear} />
        <Buttons onLoadRaces={handleLoadRaces} onLoadDrivers={handleLoadDrivers} />
      </div>
    </div>
  );
}

export default Header;
