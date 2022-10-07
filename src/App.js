import React from 'react';
import Header from './features/header/Header';
import Filters from './features/filters/Filters';
import Sections from './features/sections/Sections';
import Footer from './features/footer/Footer';
import './style.css'

function App() {
  return (
    <div id="app">
      <div id="container">
        <Header />
        <main>
          <Filters />
          <Sections />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
