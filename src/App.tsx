import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main className="content">
        <Routes />
      </main>
    </div>
  );
}

export default App;
