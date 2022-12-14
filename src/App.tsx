import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react"
import { Pokemon } from './Pokemon';

const url = "https://pokeapi.co/api/v2/pokemon";

function App() {
  const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);
  useEffect(() => {
    const result = fetch(url).then(resp => resp.json()).then(pokes => {
      setPokemons(pokes.results)
    })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      <h3>Nombres:</h3>
        <ul>
          <li>Antonio Insuasti</li>
          <li>Nicolas Cisneros</li>
        </ul>
        <h3>Fecha:</h3>
        <p>{new Date().toLocaleString()}</p>
        <h3>Módulo:</h3>
        <p>INTEGRACIÓN Y ENTREGA CONTINUA (DEVOPS)</p>
        <h1>Lista de Pokemon en React - Uso de <a href="https://pokeapi.co">Pokemon API</a></h1>
        <img src={logo} className="App-logo" alt="logo" />
        {pokemons.map((poke, index) => <Pokemon {...poke} key={`${index} ${poke.name}`} />)}
        
      </header>
    </div>
  );
}

export default App;
