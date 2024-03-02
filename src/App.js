import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import About from './About';
import Tools from './Tools';

const App = () => {
  return (
    <>
      <div className='main'>
        <BrowserRouter>
          <Nav />
          <div className='container-box'>
            <Routes>
              <Route path='/' Component={Home} />
              <Route exact path='/tools' Component={Tools}/>
              <Route exact path='/about' Component={About} />
            </Routes>
          </div>
        </BrowserRouter>
      </div >
    </>
  )
};

export default App;