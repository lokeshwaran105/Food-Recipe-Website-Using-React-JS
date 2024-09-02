import React from 'react';
import pic2 from '../assets/about-pic-2.jpg';

function AboutUs() {
  return (
    <div className="about-us container my-5">
      <h1 className="text-center mb-5">About Home Cook</h1>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <img
            src={pic2}
            alt="Home Cook"
            className="rounded h-12"
          />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <h2>Welcome to Home Cook!</h2>
          <p>
            At <strong>Home Cook</strong>, we believe that anyone can cook delicious meals with the right recipes and inspiration. Our platform is designed to offer a wide variety of easy-to-follow recipes from around the world.
          </p>
          <p>
            Whether you're a seasoned home chef or just starting your culinary journey, our goal is to make cooking fun, accessible, and flavorful. We provide detailed recipes, cooking tips, and inspiration for you to create amazing dishes at home.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to connect food lovers with authentic, home-cooked meals from diverse cultures, using ingredients and methods that anyone can try. We aim to inspire people to explore new cuisines and make cooking a joyful experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
