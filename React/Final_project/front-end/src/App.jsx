import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Header from "../components/header/Header";
import Home from "../components/pages/home/Home";
import About from "../components/pages/about/About";
import MealDetail from "../components/mealdetails/MealDetail";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  const location = useLocation();
  const noHeaderRoutes = ['/about', '/meal'];

  const shouldShowHeader = !noHeaderRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div>
      {shouldShowHeader && <Header />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/meal/:id" element={<MealDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
