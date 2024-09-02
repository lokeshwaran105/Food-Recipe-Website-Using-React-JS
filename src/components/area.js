import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const CuisineResults = () => {
  const { cuisine } = useParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCuisineResults = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`);
        const data = await response.json();
        if (data.meals) {
          setMeals(data.meals);
        } else {
          setMeals([]);
        }
      } catch (err) {
        setError('Failed to fetch meals. Please try again later.');
      }
      setLoading(false);
    };

    fetchCuisineResults();
  }, [cuisine]);

  return (
    <div className="search-results container my-5">
      <h2 className="text-center mb-4">Recipes for "{cuisine}" Cuisine </h2>
      
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      <div className="row">
        {meals.length > 0 ? (
          meals.map((meal) => (
            <div key={meal.idMeal} className="col-md-4 mb-4 text-center">
              <div className="card h-100">
                <img
                  src={meal.strMealThumb}
                  className="card-img-top"
                  alt={meal.strMeal}
                />
                <div className="card-body">
                  <h5 className="card-title">{meal.strMeal}</h5>
                  <Link to={`/meal/${meal.idMeal}`} className="btn text-white" style={{ backgroundColor: '#E54C44' }}>
                    View Recipe
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          !loading && (
            <p className="text-center">No meals found for "{cuisine}".</p>
          )
        )}
      </div>
    </div>
  );
}

export default CuisineResults;
