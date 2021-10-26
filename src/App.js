import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Ticketmaster from './components/Ticketmaster';
import Weather from './components/Weather';
import Nasa from './components/Nasa';
import './App.css';





function App() {
  return (
    <div>
      <Ticketmaster />
      <Weather />
      <Nasa />

    </div>
  )
}

export default App;
