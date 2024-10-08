import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "../mealdetails/mealDetails.css";

export default function MealDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

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
        <div 
            className="meal-detail"
            style={{ backgroundImage: `url(${meal.strMealThumb})` }} // Set background image
        >
            <button className="back-button" onClick={() => navigate('/')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            <div className="meal-det">
                <div className="meal-pic">
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
                </div>

                <div className='meal-all'>
                    <h2>{meal.strMeal}</h2>
                    <p><strong>Category:</strong> {meal.strCategory}</p>
                    <p><strong>Area:</strong> {meal.strArea}</p>

                    {/* Button to show instructions modal */}
                    <button className="instruction-btn" onClick={toggleModal}>
                        Show Instructions
                    </button>

                    {isModalOpen && (
                        <div className="modal">
                            <div className="modal-content">
                                <span className="close-btn" onClick={toggleModal}>
                                    &times;
                                </span>
                                {/* Instructions displayed with a scroll */}
                                <div className="modal-scroll">
                                    <p><strong>Instructions:</strong> {meal.strInstructions}</p>
                                </div>
                            </div>
                        </div>
                    )}

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
            </div>
        </div>
    );
}
