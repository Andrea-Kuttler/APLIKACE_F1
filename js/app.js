import React, { useState } from 'react';
import { createRoot } from "react-dom/client";
import '../css/style.css';  // Importujeme CSS soubor

import Header from "./components/Header";  // Importujeme komponentu Header
import Main from "./components/Main";  // Importujeme komponentu Main

const App = () => {
    const [races, setRaces] = useState([]);  // Stav pro závody
    const [drivers, setDrivers] = useState([]);  // Stav pro jezdce
    const [isRacesVisible, setIsRacesVisible] = useState(true);  // Stav pro zobrazení závodů/jezdců

    // Funkce pro načtení závodů podle roku
    const fetchRaces = (year) => {
        const apiUrl = `https://ergast.com/api/f1/${year}.json`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Chyba při získávání dat');
                }
                return response.json();
            })
            .then(data => {
                setRaces(data.MRData.RaceTable.Races);  // Nastavíme data o závodech
                setIsRacesVisible(true);  // Zobrazíme závody
            })
            .catch(error => {
                console.error('Chyba:', error);
            });
    };

    // Funkce pro načtení jezdců podle roku
    const fetchDrivers = (year) => {
        const apiUrl = `https://ergast.com/api/f1/${year}/drivers.json`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Chyba při získávání dat');
                }
                return response.json();
            })
            .then(data => {
                setDrivers(data.MRData.DriverTable.Drivers);  // Nastavíme data o jezdcích
                setIsRacesVisible(false);  // Zobrazíme jezdce
            })
            .catch(error => {
                console.error('Chyba:', error);
            });
    };

    return (
        <>
            <Header
                onLoadRaces={fetchRaces}
                onLoadDrivers={fetchDrivers}
            />
            <Main 
                isRacesVisible={isRacesVisible}
                races={races}
                drivers={drivers}
            />
        </>
    );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
