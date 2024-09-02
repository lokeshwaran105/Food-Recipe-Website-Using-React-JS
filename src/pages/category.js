import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
      const data = await response.json();
      setCategories(data.categories);
    };

    fetchCategories();
  }, []);

  console.log(categories);

  return (
    <div className="homepage container my-5">
      <h2 className="text-center mb-5">Browse by Category</h2>
      <div className="row">
        {categories.map((category) => (
          <div key={category.idCategory} className="col-md-4 mb-4">
            <div className="card h-100">
              <img src={category.strCategoryThumb} className="card-img-top" alt={category.strCategory} />
              <div className="card-body text-center">
                <h5 className="card-title">{category.strCategory}</h5>
                <Link to={`/categories/${category.strCategory}`} className="btn text-white" style={{ backgroundColor: '#E54C44' }}>
                  View {category.strCategory} Recipes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
