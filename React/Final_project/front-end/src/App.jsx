import React from "react";
import Header from "../components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";


export default function App() {
  return (
    <Router>
    <div>
      
        <Header />
        <main>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          </Routes>
        </main>
      
    </div>
    </Router>
  );
}
