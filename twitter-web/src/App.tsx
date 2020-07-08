import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TNavbar from './components/TNavbar'
function App() {
  return (
    <div className="App">
      <TNavbar username="FromCaller"/>
    </div>
  );
}

export default App;
