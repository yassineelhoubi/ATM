import React from 'react';
import '../assets/css/custom.css';
import { GiReturnArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';



const Withdraw: React.FC = () => {
  return (
    <>

      <div className="w-full flex justify-between">
        <span></span>
        <h1 className="text-3xl lg:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-200 font-extrabold">
          Sélectionner Le Solde
        </h1>
        <Link to="/">
          <GiReturnArrow className="text-3xl lg:text-5xl text-cyan-100 mr-10" />
        </Link>
      </div>
      <div className="w-full h-5/6 flex">
        <div className="w-1/2 h-full rounded-3xl flex flex-col justify-around items-center">
          <button className="w-4/5 btn h-1/6">
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              2000DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-r-full">
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              3000DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-r-full">
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              4000DH
            </span>
          </button>
        </div>
        <div className="w-1/2 h-full rounded-3xl flex flex-col items-center justify-around">
          <button className="w-4/5 btn h-1/6 rounded-l-full">
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              5000DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-l-full">
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              6000DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-l-full">
            <span className="text-cyan-900 text-2xl lg:text-5xl font-extrabold">
              Autre Choix
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Withdraw;