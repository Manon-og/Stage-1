import './App.css';
import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main/main';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/"  element={<Main/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;

/*
npm i react-router-dom
*/