import React, { useState } from 'react';
import { useEffect } from 'react';
import { GiReturnArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {

    const [cities, setCities] = useState<any>([]);

    useEffect(() => {
      fetch('https://calm-fjord-14795.herokuapp.com/api/villes')
            .then(res => res.json())
            .then(data => {
                console.log(data.res);
                setCities(data);
            })
    }, []);

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black/50">
      <div className="bg-gradient-to-b from-cyan-500/50 via-cyan-400/50 to-cyan-300/50 h-5/6 w-5/6 rounded-3xl flex flex-col justify-center items-center">
        <div className="w-full flex justify-between">
          <span></span>
          <h1 className="text-3xl lg:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-200 font-extrabold">
            Payer le ticket du voyage
          </h1>
          <Link to="/">
            <GiReturnArrow className="text-3xl lg:text-5xl text-cyan-100 mr-10" />
          </Link>
        </div>
        <div className="w-full h-5/6 rounded-3xl flex justify-center items-center">
          <div className="card w-96 h-96 bg-slate-300 shadow-xl rounded-lg">
            <figure className="px-10 pt-6">
              <img
                src="https://www.mercedes-benz-mobility.com/bilder/mbm-relaunch/was-wir-machen/mercedes-pay_ratio_3x1_s.jpg"
                alt="car"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body h-3/5 items-center text-center mt-2">
              <div className="card-actions flex flex-col w-full">
                <div className="flex flex-col w-full items-center">
                  <label htmlFor="">ville de départ</label>
                  <select name="" id="" className="w-4/5 py-2 rounded-md">
                    <option value="">choisir</option>
                    {cities.map((city: any) => (
                      <option value="" key={city.id}>
                        {city.ville}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col w-full items-center mb-2">
                  <label htmlFor="">ville d'arriver </label>
                  <select name="" id="" className="w-4/5 py-2 rounded-md">
                    <option value="">choisir</option>
                    {cities.map((city: any) => (
                      <option value="" key={city.id}>
                        {city.ville}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col w-full items-center mb-2">
                  <label htmlFor="">Société</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-4/5 py-2 rounded-md"
                  />
                </div>
                <button className="btn text-gray-800">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
