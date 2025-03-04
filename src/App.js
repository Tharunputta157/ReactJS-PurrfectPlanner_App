//import logo from './logo.svg';
//import { useState } from 'react';
import './App.css';
import { Catfact } from './catFact';
import { Navbar } from './Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/login';

import Todo from './todo';


import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'

function App() {
  
  

  return (
    <div className='App'>
      <Router>
        <div className='nav'>
          <Navbar />
        </div>
        
        <div className='routes'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/todo' element={<Todo/>} />
            <Route path='/Catfact' element={<Catfact/>} />
            <Route path='/Login' element={<Login/>} />

              
          </Routes>
        </div>
       
      </Router>

    </div>
    
  );
}

export default App;
