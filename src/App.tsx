import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Routes from './routes';

function App() {

  const [darkMode, setDarkMode] = useState(true); 

  return (
    <div className="App" data-theme={darkMode? 'dark': ''}>
      <Navigation toggleDarkMode={setDarkMode} inDarkMode={darkMode} />
      <main className="content">
        <Routes />
      </main>
    </div>
  );
}

export default App;
