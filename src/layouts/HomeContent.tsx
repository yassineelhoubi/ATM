import React from 'react';
import { Link } from 'react-router-dom';


const HomeContent: React.FC = () => {
  return (
    <div className="h-full w-full px-6 grid grid-cols-3 lg:grid-cols-3 gap-2">
      <Link
        to="/withdraw"
        className="relative border border-gray-100 bg-white rounded-tl-3xl w-full h-full flex flex-col justify-center items-center"
      >
        <img src="src/assets/euro.gif" alt="" className="w-1/4" />
        <h2 className="font-semibold text-sm lg:text-2xl">
          Withdrawal
        </h2>
      </Link>

      <Link
        to="/bills"
        className="relative flex flex-col justify-center items-center border border-gray-100 bg-white w-full h-full"
      >
        <img src="src/assets/smartphone.gif" alt="" className="w-1/4" />
        <h2 className="font-semibold text-base lg:text-2xl">
          Pay bills
        </h2>
      </Link>

      <Link
        to="/cash"
        className="relative flex flex-col justify-center items-center border border-gray-100 bg-white rounded-tr-3xl w-full h-full"
      >
        <img src="src/assets/box.gif" alt="" className="w-1/4" />
        <h2 className="font-semibold text-sm lg:text-2xl">
          Consult Balance
        </h2>
      </Link>

      <Link
        to="/car"
        className="relative flex flex-col justify-center items-center border border-gray-100 bg-white rounded-bl-3xl w-full h-4/5"
      >
        <img src="src/assets/car.gif" alt="" className="w-1/4" />
        <h2 className="font-semibold text-sm lg:text-2xl">
          Car Vignette
        </h2>
      </Link>

      <Link
        to="/booking"
        className="relative flex flex-col justify-center items-center border border-gray-100 bg-white w-full h-4/5"
      >
        <img src="src/assets/airplane.gif" alt="" className="w-1/4" />
        <h2 className="font-semibold text-sm lg:text-2xl">
          Travel Ticket
        </h2>
      </Link>

      <Link
        to="/mobile"
        className="relative flex flex-col justify-center items-center border border-gray-100 bg-white rounded-br-3xl w-full h-4/5"
      >
        <img src="src/assets/mobile.gif" alt="" className="w-1/4" />
        <h2 className="font-semibold text-sm lg:text-2xl">
          Mobile Recharge
        </h2>
      </Link>
    </div>

  );
};

export default HomeContent;