import React from 'react';
import HomeContent from '../layouts/HomeContent';
import Navbar from '../layouts/Navbar';

const Home: React.FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="bg-gradient-to-b from-blue-500/50 via-cyan-400/50 to-cyan-300/50 h-5/6 w-5/6 rounded-3xl flex flex-col justify-center items-center">
        <Navbar />
        <HomeContent />
      </div>
    </div>
  );
};

export default Home;
