import React from 'react';
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
