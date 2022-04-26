import React from 'react';
import { GiReturnArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';


const Cash: React.FC = () => {
    return (
      <div className="h-screen w-screen flex justify-center items-center bg-black/50">
        <div className="bg-gradient-to-b from-cyan-500/50 via-cyan-400/50 to-cyan-300/50 h-5/6 w-5/6 rounded-3xl flex flex-col justify-center items-center">
          <div className="w-full flex justify-between">
            <span></span>
            <h1 className="text-3xl lg:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-200 font-extrabold">
              Votre Solde
            </h1>
            <Link to="/">
              <GiReturnArrow className="text-3xl lg:text-5xl text-cyan-100 mr-10" />
            </Link>
          </div>
          <div className="w-full h-5/6 rounded-3xl flex justify-center items-center">
            <div className="bg-black/20 w-3/5 h-40 rounded-full flex justify-center items-center">
              <span className="text-slate-300 text-3xl lg:text-5xl font-extrabold">
                28000.86 DH
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cash;