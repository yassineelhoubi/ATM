import React from 'react';
import { GiReturnArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useFetch } from '../hook/useFetch';

const Cash: React.FC = () => {

  //@ts-ignore
  const userId = JSON.parse(localStorage.getItem('user'))._id;
  const { data } = useFetch(`http://localhost:3030/user/${userId}`);

  return (
    <>
      <div className="w-full flex justify-between">
        <span></span>
        <h1 className="text-3xl lg:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-200 font-extrabold">
          Votre Solde
        </h1>
        <Link to="/home">
          <GiReturnArrow className="text-3xl lg:text-5xl text-cyan-100 mr-10" />
        </Link>
      </div>
      <div className="w-full h-5/6 rounded-3xl flex justify-center items-center">
        <div className="bg-black/20 w-3/5 h-40 rounded-full flex justify-center items-center">
          <span className="text-slate-300 text-3xl lg:text-5xl font-extrabold">
            <span>{data?.balance}</span> DH
          </span>
        </div>
      </div>
    </>
  );
};

export default Cash;