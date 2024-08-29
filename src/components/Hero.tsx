import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-green-400 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-xl">I'm a Web Developer specializing in React and TypeScript</p>
        <a href="#projects" className="mt-8 inline-block bg-white text-gray-800 px-6 py-3 rounded-lg">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
