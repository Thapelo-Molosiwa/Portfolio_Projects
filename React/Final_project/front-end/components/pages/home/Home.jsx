// src/Home.js
import React, { useEffect, useState } from 'react';
import '../home/home.css';
import FavoriteButton from '../../buttons/FavoriteButton';

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

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
            }
        };

        fetchMeals();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="home">
            
            <div className="meal-container">
                {meals.map(meal => (
                    <div key={meal.idMeal} className="meal-card">
                       
                        <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image"/>
                        <FavoriteButton />
                        <h2>{meal.strMeal}</h2>
                        <p><strong>Category:</strong> {meal.strCategory}</p>
                        <p><strong>Area:</strong> {meal.strArea}</p>
                        <p><strong>Tags:</strong> {meal.strTags || 'None'}</p>
                        {/* <p><strong>Instructions:</strong> {meal.strInstructions}</p> */}
                        <a href={meal.strYoutube} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                        <div className="ingredients">
                            <h3>Ingredients:</h3>
                            <ul>
                                {Array.from({ length: 20 }, (_, i) => (
                                    meal[`strIngredient${i + 1}`] && meal[`strMeasure${i + 1}`] ? (
                                        <li key={i}>
                                            {meal[`strMeasure${i + 1}`]} {meal[`strIngredient${i + 1}`]}
                                        </li>
                                    ) : null
                                ))}
                            </ul>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
