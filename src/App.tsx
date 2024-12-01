import React from 'react';
import { Hero } from './components/Hero';
import { FeaturedDishes } from './components/FeaturedDishes';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedDishes />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;