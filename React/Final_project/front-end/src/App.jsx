import React from "react";
import Header from "../components/header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import MealDetail from "../components/mealdetails/MealDetail";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




export default function App() {
  return (
    <Router>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/meal/:id" element={<MealDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
