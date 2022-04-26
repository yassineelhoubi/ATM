import React from 'react';
import { Link } from 'react-router-dom';


const HomeContent: React.FC = () => {
    return (
      <div className="w-full h-full flex flex-col">
        <h1 className="pl-12 text-white font-semibold text-4xl my-6">
          Sélectionner une service
        </h1>
        <div className="w-full h-full flex">
          <div className="h-full pl-12 w-full grid grid-cols-3 lg:grid-cols-3 gap-2">
            <Link
              to="/withdraw"
              className="relative border border-gray-100 bg-white rounded-tl-3xl w-full h-full flex flex-col justify-center items-center"
            >
              <img src="src/assets/euro.gif" alt="" className="w-1/4" />
              <h2 className="font-semibold text-sm lg:text-2xl">
                Faire un retrait
              </h2>
            </Link>

            <Link
              to="/bills"
              className="relative flex flex-col justify-center items-center border border-gray-100 bg-white w-full h-full"
            >
              <img src="src/assets/smartphone.gif" alt="" className="w-1/4" />
              <h2 className="font-semibold text-base lg:text-2xl">
                Payer Facture{' '}
              </h2>
            </Link>

            <Link
              to="/cash"
              className="relative flex flex-col justify-center items-center border border-gray-100 bg-white rounded-tr-3xl w-full h-full"
            >
              <img src="src/assets/box.gif" alt="" className="w-1/4" />
              <h2 className="font-semibold text-sm lg:text-2xl">
                Consulter Solde
              </h2>
            </Link>

            <Link
              to="/car"
              className="relative flex flex-col justify-center items-center border border-gray-100 bg-white rounded-bl-3xl w-full h-4/5"
            >
              <img src="src/assets/car.gif" alt="" className="w-1/4" />
              <h2 className="font-semibold text-sm lg:text-2xl">
                Vignette de voiture
              </h2>
            </Link>

            <Link
              to="/booking"
              className="relative flex flex-col justify-center items-center border border-gray-100 bg-white w-full h-4/5"
            >
              <img src="src/assets/airplane.gif" alt="" className="w-1/4" />
              <h2 className="font-semibold text-sm lg:text-2xl">
                Ticket du Voyage
              </h2>
            </Link>

            <Link
              to="/mobile"
              className="relative flex flex-col justify-center items-center border border-gray-100 bg-white rounded-br-3xl w-full h-4/5"
            >
              <img src="src/assets/mobile.gif" alt="" className="w-1/4" />
              <h2 className="font-semibold text-sm lg:text-2xl">
                Rercharge mobile
              </h2>
            </Link>
          </div>
          <div className="w-2/5 h-full flex justify-center pb-16">
            <div className="bg-[url(https://images.pexels.com/photos/7948726/pexels-photo-7948726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)] bg-cover w-4/5 h-full rounded-3xl"></div>
          </div>
        </div>
      </div>
    );
};

export default HomeContent;