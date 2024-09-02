import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import './App.css';
import MealDetails from './components/common/recipedetails';
import Layout from './components/layout/layout';
import CategoriesSection from './pages/category';
import CategoryPage from './components/common/category_recipes';
import ContactUs from './pages/contact';
import AboutUs from './pages/about';
import SearchResults from './components/search/search_result';
import CuisineResults from './components/area';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Homepage />} />
          <Route path='/categories' element={<CategoriesSection />} />
          <Route path='/categories/:strCategory' element={<CategoryPage />} />
          <Route path="/meal/:idMeal" element={<MealDetails />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path="/search/:searchTerm" element={<SearchResults />} />
          <Route path="/area/:cuisine" element={<CuisineResults />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
