import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cuisine = () => {
    const [cuisines, setCuisines] = useState([]);

    useEffect(() => {
        const fetchCuisines = async () => {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
            const data = await response.json();
            setCuisines(data.meals);
        };

        fetchCuisines();
    }, []);

    return (
        <div className="container my-5">
            <h2 className="text-center fw-bold mb-4">Explore Cuisines</h2>
            <div className="row">
                {cuisines.map((cuisine, index) => (
                    <div className="col-6 col-md-4 col-lg-3 mb-3" key={index}>
                        <Link to={`/area/${cuisine.strArea}`} className="text-decoration-none">
                            <div className="card text-center border border-3">
                                <div className="card-body">
                                    <h5 className="card-title">{cuisine.strArea}</h5>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cuisine;
