import React from 'react';
import {Link} from "react-router-dom";
import {GiReturnArrow} from "react-icons/gi";


const Bills: React.FC = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-black/50">
            <div className="bg-gradient-to-b from-cyan-500/50 via-cyan-400/50 to-cyan-300/50 h-5/6 w-5/6 rounded-3xl flex flex-col justify-center items-center">
                <div className="w-full flex justify-between">
                    <span></span>
                    <h1 className="text-3xl lg:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-200 font-extrabold">
                        Sélectionner Le Solde
                    </h1>
                    <Link to="/">
                        <GiReturnArrow className="text-3xl lg:text-5xl text-cyan-100 mr-10" />
                    </Link>
                </div>
                <div className="w-full h-5/6 rounded-3xl grid grid-cols-1 justify-items-center items-center">
                    <button className="w-4/5 btn h-1/3 rounded-l-full">
              <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
                Facture Electricité
              </span>
                    </button>
                    <button className="w-4/5 btn h-1/3 rounded-l-full">
              <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
                Facture Eau
              </span>
                    </button>
                    <button className="w-4/5 btn h-1/3 rounded-l-full">
              <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
                Facture Télécome
              </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bills;