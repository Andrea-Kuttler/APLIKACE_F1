import React from 'react';

function Buttons({ onLoadRaces, onLoadDrivers }) {
  return (
    <div className="buttons">
      <button onClick={onLoadRaces}>Načíst závody</button>
      <button onClick={onLoadDrivers}>Načíst jezdce</button>
    </div>
  );
}

export default Buttons;
