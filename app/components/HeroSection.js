import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cover bg-center h-screen " style={{ backgroundImage: 'url(/banner.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold">Autumn 2021</h2>
          <p className="mt-4">New Arrivals</p>
          <button className="rounded-md mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
