import React from "react";
import { BrowserRouter,Router,Route,Routes } from "react-router-dom";
// import MemeGenerator from "./components/MemeGenerator";
import MemeGenerator from "./components/MemeGenerator";
import './App.css';
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Signup } from "./components/Signup";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/meme" element={<MemeGenerator />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
    </BrowserRouter>
    // <div className="App">
      
    //    <Home/>

    // </div>
  );
}

export default App;
