import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
// import '.../'

function CategoryPage() {
  const { strCategory } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMealsByCategory = async () => {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);
      setMeals(response.data.meals)
    };

    fetchMealsByCategory();
  }, [strCategory]);


  return (
    <div className="category-page container my-5">
      <h2 className="text-center mb-5">Recipes in {strCategory}</h2>
      <div className="row">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100">
              <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
              <div className="card-body text-center">
                <h5 className="card-title">{meal.strMeal}</h5>
                <Link to={`/meal/${meal.idMeal}`} className="btn text-white" style={{ backgroundColor: '#E54C44' }}>
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage;
