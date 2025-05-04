import React, { useState } from "react";

const Dropdown = ({ onYearChange, defaultYear = 2024 }) => {
  const years = Array.from({ length: 2024 - 1950 + 1 }, (_, i) => 1950 + i);
  const [selectedYear, setSelectedYear] = useState(defaultYear);

  const handleChange = (e) => {
    const year = parseInt(e.target.value);
    setSelectedYear(year);
    if (onYearChange) {
      onYearChange(year);
    }
  };

  return (
    <div className="year-dropdown">
      <select
        className="form-select"
        value={selectedYear}
        onChange={handleChange}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <span className="tooltip">Po výběru roku vyber Načíst závody nebo Načíst jezdce</span>
    </div>
  );
};

export default Dropdown;
