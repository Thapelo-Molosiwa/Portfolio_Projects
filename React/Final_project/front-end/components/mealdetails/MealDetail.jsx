// src/MealDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../mealdetails/mealDetails.css"

const MealDetail = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeal = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setMeal(data.meals ? data.meals[0] : null);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMeal();
        }
    }, [id]);

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

    if (!meal) {
        return <div>Meal not found</div>;
    }

    return (
        <div className="meal-detail">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image"/>
            <h2>{meal.strMeal}</h2>
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong>Area:</strong> {meal.strArea}</p>
            <p><strong>Instructions:</strong> {meal.strInstructions}</p>
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
    );
};

export default MealDetail;
