import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './Products.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1>Static React App</h1>
      </header>
      <section>
        <Products />
      </section>
    </div>
  );
}

export default App;
