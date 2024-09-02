import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function MealDetails() {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
      const data = await response.json();
      setMeal(data.meals[0]);
    };

    fetchMealDetails();
  }, [idMeal]);

  if (!meal) {
    return <div className="text-center my-5">Loading...</div>;
  }

  const cleanInstructions = (text) => {
    return text
      .replace(/^\d+\.\s*/gm, '')
      .replace(/^STEP\s+\d+\s*/gm, '')
      .split('\n')
      .filter(step => step.trim() !== '')
      .map((step, index) => <li key={index} className="mt-2"><b>Step-{index+1}:</b> {step}</li>);
  };

  const instructions = cleanInstructions(meal.strInstructions);

  return (
    <div className="meal-details container my-5">
      <div className="row align-items-center">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <img src={meal.strMealThumb} className="img-fluid rounded-3 meal-image" style={{height: "350px"}} alt={meal.strMeal} />
        </div>
        <div className="col-12 col-md-6">
          <h2 className="text-dark">Recipe Name: {meal.strMeal}</h2>
          <h4 className="text-secondary">Category: {meal.strCategory}</h4>
          <h4 className="text-secondary">Area: {meal.strArea}</h4>
          <h4 className="text-secondary">Tags: {meal.strTags ? meal.strTags.split(',').join(', ') : 'None'}</h4>
          <a href={meal.strYoutube} className="btn btn-danger mt-3" target="_blank" rel="noopener noreferrer">
            Watch Video
          </a>
        </div>
      </div>
      <div className="row mt-5">
        <h2 className="fw-bold mb-3 text-dark">INGREDIENTS</h2>
        <table className="table table-striped table-hover ingredients-table">
          <thead className="thead-light">
            <tr>
              <th scope="col">Ingredient</th>
              <th scope="col">Measurement</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }, (_, i) => i + 1)
              .map(i => meal[`strIngredient${i}`] && (
                <tr key={i}>
                  <td>{meal[`strIngredient${i}`]}</td>
                  <td>{meal[`strMeasure${i}`]}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="row mt-5">
        <h2 className="fw-bold mb-3 text-dark">INSTRUCTIONS</h2>
        <ol className='instructions'>
          {
            instructions.map((steps, i) => (
              <li key={i} className="mt-2 instruction-text">{steps}</li>
            ))
          }
        </ol>
      </div>
    </div>
  );
}

export default MealDetails;
