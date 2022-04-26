import React from 'react';


const Navbar: React.FC = () => {
    return (
      <div className="h-24 w-full flex justify-between items-center pr-16">
        <div className="text-white font-bold">
          <img src="src/assets/t.svg" alt="" className="w-72 mb-8" />
        </div>
        <div className="bg-black/20 w-1/5 rounded-full flex">
          <p className="p-2 w-1/2 text-center">EN</p>
          <p className="bg-white p-2 w-1/2 rounded-full text-center">FR</p>
        </div>
      </div>
    );
};

export default Navbar;