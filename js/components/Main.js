import React from 'react';

function Main({ isRacesVisible, races, drivers }) {
  return (
    <div className="seznam">
      {isRacesVisible ? (
        <ul id="raceList">
          {races.map(race => (
            <li key={race.round}>
              {`${race.round}: ${race.raceName} (${race.date}) - ${race.Circuit.circuitName}`}
            </li>
          ))}
        </ul>
      ) : (
        <ul id="driverList">
          {drivers.map(driver => (
            <li key={driver.driverId}>
              {`${driver.givenName} ${driver.familyName} (${driver.nationality}) - ${driver.permanentNumber ?? 'bez čísla'}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Main;
