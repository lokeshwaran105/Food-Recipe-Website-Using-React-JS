import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function FeaturedRecipe() {
  const [meals, setMeal] = useState([]);

  const fetch_recipes = async () => {
    const meal_array = [];

    for (let i = 0; i < 3; i++) {
      meal_array.push(fetch('https://www.themealdb.com/api/json/v1/1/random.php').then(response => response.json()));
    }

    const result_array = await Promise.all(meal_array);
    setMeal(result_array.map((data) => data.meals[0]));
  };

  useEffect(() => {
    fetch_recipes();
  }, []);

  return (
    <div className="featured-recipes container my-5 py-4 bg-light rounded">
      <h2 className="text-center mb-4 fw-bolder text-dark">Featured Recipes</h2>
      <div className="row">
        {meals.map((meal, index) => (
          <div className="col-sm-12 col-md-4 col-lg-4 mb-4" key={index}>
            <div className="card shadow-sm h-100 border-0">
              <img
                src={meal.strMealThumb}
                className="card-img-top rounded-top"
                alt={meal.strMeal}
                style={{ transition: 'transform 0.3s ease' }}
              />
              <div className="card-body text-center bg-white">
                <h5 className="card-title text-dark fw-bold">{meal.strMeal}</h5>
                <p className="card-text text-muted">
                  {meal.strInstructions.substring(0, 100)}...
                </p>
                <Link
                  to={`/meal/${meal.idMeal}`}
                  className="btn text-white"
                  style={{ backgroundColor: '#E54C44', transition: 'background-color 0.3s ease' }}
                  onMouseOver={(e) => e.target.style.backgroundColor = '#d9433b'}
                  onMouseOut={(e) => e.target.style.backgroundColor = '#E54C44'} 
                >
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedRecipe;

