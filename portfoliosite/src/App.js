import React from 'react';
import Home from './screens/Main/index';
import { Header, Footer } from './components';
import './App.css';

function App() {
  return (
    <div>
      <Header />
        <Home />
      <Footer />
    </div>
  );
}

export default App;