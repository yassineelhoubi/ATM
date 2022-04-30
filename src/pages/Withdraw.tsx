import React from 'react';
import '../assets/css/custom.css';
import { GiReturnArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Withdraw: React.FC = () => {
  const action = (balance: number) => {
    const userId = JSON.parse(localStorage.getItem('user') as string)._id;
    const data = {
      balance: balance
    };
    axios.patch(`http://localhost:3030/user/${userId}/withdraw-balance`, data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <div className="w-full flex justify-between">
        <span></span>
        <h1 className="text-3xl lg:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-200 font-extrabold">
          Select the balance
        </h1>
        <Link to="/home">
          <GiReturnArrow className="text-3xl lg:text-5xl text-cyan-100 mr-10" />
        </Link>
      </div>
      <div className="w-full h-5/6 flex">
        <div className="w-1/2 h-full rounded-3xl flex flex-col justify-around items-center">
          <button className="w-4/5 btn h-1/6" onClick={() => action(100)}>
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              100DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-r-full" onClick={() => action(200)}>
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              200DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-r-full" onClick={() => action(300)}>
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              300DH
            </span>
          </button>
        </div>
        <div className="w-1/2 h-full rounded-3xl flex flex-col items-center justify-around">
          <button className="w-4/5 btn h-1/6 rounded-l-full" onClick={() => action(400)}>
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              400DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-l-full" onClick={() => action(500)}>
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              500DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-l-full">
            <span className="text-cyan-900 text-2xl lg:text-5xl font-extrabold">
              Other Choice
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export { Withdraw }