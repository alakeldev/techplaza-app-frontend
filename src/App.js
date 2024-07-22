import React, { Fragment } from 'react';
import './App.module.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Home />
    </Fragment>
  );
}

export default App;
