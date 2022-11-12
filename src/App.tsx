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
        <h1>Lista de Pokemon en React - Uso de <a href="https://pokeapi.co">Pokemon API</a></h1>
        <img src={logo} className="App-logo" alt="logo" />
        {pokemons.map((poke, index) => <Pokemon {...poke} key={`${index} ${poke.name}`} />)}
        <h3>Nombres:</h3>
        <li>
          <ul>Antonio Insuasti</ul>
          <ul>Nicolas Cisneros</ul>
        </li>
        <h3>Fecha:</h3>
        <p>{Date.now().toLocaleString()}</p>
        <h3>Módulo:</h3>
        <p>INTEGRACIÓN Y ENTREGA CONTINUA (DEVOPS)</p>
      </header>
    </div>
  );
}

export default App;
