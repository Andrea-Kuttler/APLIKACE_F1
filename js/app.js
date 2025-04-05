import React from 'react';
import '../style.css';



document.getElementById('fetchDataSeason').addEventListener('click', () => {
    const apiUrl = 'https://ergast.com/api/f1/2024.json';
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Chyba při získávání dat');
            }
            return response.json();
        })
        .then(data => {
            const races = data.MRData.RaceTable.Races;
            const raceList = document.getElementById('raceList');
            raceList.innerHTML = ''; // Vyčištění seznamu

            races.forEach(race => {
                const listItem = document.createElement('li');
                listItem.textContent = `${race.round}: ${race.raceName} (${race.date}) - ${race.Circuit.circuitName}`;
                raceList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Chyba:', error);
        });
});

document.getElementById('fetchDataDrivers').addEventListener('click', () => {
    const apiUrl = 'https://ergast.com/api/f1/2024/drivers.json';
    
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Chyba při získávání dat');
            }
            return response.json();
        })
        .then(data => {
            const drivers = data.MRData.DriverTable.Drivers;
            const driverList = document.getElementById('raceList'); // Můžeš přejmenovat na driverList pokud chceš
            driverList.innerHTML = ''; // Vyčištění seznamu

            drivers.forEach(driver => {
                const listItem = document.createElement('li');
                listItem.textContent = `${driver.givenName} ${driver.familyName} (${driver.nationality}) - ${driver.permanentNumber ?? 'bez čísla'}`;
                driverList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Chyba:', error);
        });
});
