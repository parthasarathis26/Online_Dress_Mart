// src/components/Home.js
import React from 'react';
import Navigation from './Navigation';

const Home = () => {
  return (
    <>
      <Navigation />
      <div className="home-content">
        <h1>Welcome to Online Dress Mart</h1>
        <p>Discover the latest trends for Men, Women, and Kids.</p>
      </div>
    </>
  );
};

export default Home;
