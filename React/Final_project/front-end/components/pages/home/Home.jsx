import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "../home/home.css";
import FavoriteButton from "../../buttons/FavoriteButton";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8); // State to manage visible items
  const [showScrollButtons, setShowScrollButtons] = useState(false); // State to manage scroll buttons visibility

  useEffect(() => {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

    const fetchMeals = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButtons(true);
      } else {
        setShowScrollButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Function to handle "Show More" button click
  const showMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  // Function to handle scroll up button click
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Function to handle scroll down button click
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  // Carousel settings
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      <Slider {...carouselSettings} className="carousel">
        {meals.slice(0, 12).map(
          (
            meal // Show first 12 meals in carousel
          ) => (
            <div key={meal.idMeal} className="carousel-item">
              <Link to={`/meal/${meal.idMeal}`}>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="carousel-image"
                />
              </Link>
              <div className="carousel-caption">
                <h2>{meal.strMeal}</h2>
              </div>
            </div>
          )
        )}
      </Slider>

      <div className="meal-container">
        {meals.slice(0, visibleCount).map(
          (
            meal // Show limited number of meals
          ) => (
            <div className="meal-card" key={meal.idMeal}>
              <Link to={`/meal/${meal.idMeal}`} className="meal-link">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="meal-image"
                />
              </Link>

              <div className="meal-info">
                <FavoriteButton />
                <h2>{meal.strMeal}</h2>
                <p>
                  <strong>Category:</strong> {meal.strCategory}
                </p>
                <p>
                  <strong>Area:</strong> {meal.strArea}
                </p>
                <p>
                  <strong>Tags:</strong> {meal.strTags || "None"}
                </p>
              </div>
            </div>
          )
        )}
      </div>

      {visibleCount < meals.length && ( // Show "Show More" button only if there are more items to display
        <button onClick={showMoreItems} className="show-more-btn">
          Show More
        </button>
      )}

      {showScrollButtons && (
        <div className="scroll-buttons">
          <button onClick={scrollToTop} className="scroll-button scroll-up">
            ↑
          </button>
          <button
            onClick={scrollToBottom}
            className="scroll-button scroll-down"
          >
            ↓
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
