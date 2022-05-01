import React from 'react';
import '../assets/css/custom.css';
import { GiReturnArrow } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Slide, { SlideProps } from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';

// snackbar transition
type TransitionProps = Omit<SlideProps, 'direction'>;

function TransitionUp(props: TransitionProps) {
  return <Slide {...props} direction="up" />;
}

const Withdraw: React.FC = () => {

  const navigate = useNavigate();
  
  const [transition, setTransition] = React.useState<
    React.ComponentType<TransitionProps> | undefined>(undefined);
  const [open, setOpen] = React.useState(false);

  const action = (balance: number, Transition: React.ComponentType<TransitionProps>) => {
    const userId = JSON.parse(localStorage.getItem('user') as string)._id;
    const data = {
      balance: balance
    };
    axios.patch(`http://localhost:3030/user/${userId}/withdraw-balance`, data)
      .then(res => {
        console.log(res);
        setTransition(() => Transition);
        setOpen(true);
        setTimeout(() => {
          navigate('/home');
        }, 2000);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <>
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={transition}
        autoHideDuration={6000}
        message="Take Your Card"

      />
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
          <button className="w-4/5 btn h-1/6" onClick={() => action(100, TransitionUp)}>
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              100DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-r-full" onClick={() => action(200, TransitionUp)}>
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              200DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-r-full" onClick={() => action(300, TransitionUp)}>
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              300DH
            </span>
          </button>
        </div>
        <div className="w-1/2 h-full rounded-3xl flex flex-col items-center justify-around">
          <button className="w-4/5 btn h-1/6 rounded-l-full" onClick={() => action(400, TransitionUp)}>
            <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
              400DH
            </span>
          </button>
          <button className="w-4/5 btn h-1/6 rounded-l-full" onClick={() => action(500, TransitionUp)}>
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