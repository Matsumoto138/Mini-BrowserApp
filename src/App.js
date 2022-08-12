import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Images from "./pages/Images";
import News from "./pages/News";
import Web from "./pages/Web";
import './App.css';

function App() {

  

  return (
    <div className="App">
     <Navbar />
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/news" element={<News />} />
        <Route path="/images" element={<Images />} />
      </Routes>
    </div>
  );
}

export default App;
