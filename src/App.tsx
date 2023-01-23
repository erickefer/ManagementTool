import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="navbar">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <div className="navbar button-container">
          <div className="navbar section header">HAUPTMENÜ</div>
          <button className="navbar button">Dashboard</button>
          <button className="navbar button">Projekte</button> 
          <div className="navbar section header">ALLGEMEIN</div>
          <button className="navbar button">Einstellungen</button>
          <button className="navbar button">Benutzer</button>
        </div>
      </div>
      <div className="main-content">
        <div className="main-content-header">
          <input className="main-section-title" placeholder="🔍 Suchen"/>
          <button className="main-content-header-button">Logout</button>
        </div>
        <div className="main-content-section">
          <h2 className="main-content-section-title">Dashboard</h2>
          <div className="section-content">
            <div>L-Mobile</div>
            <div>Ecovium</div>
            <div>Sage</div>
            <div>OmniSeller</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
