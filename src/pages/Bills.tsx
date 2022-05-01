import React from 'react';
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Bills: React.FC = () => {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false);
    const [billNumber, setBillNumber] = React.useState<number>();
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = () => {
        if (billNumber) {
            const userId = JSON.parse(localStorage.getItem('user') as string)._id;
            const data = {
                status: "paid",
                userId: userId,
                billNumber: billNumber
            };
            axios.patch(`http://localhost:3030/bill/pay`, data)
                .then(res => {
                    console.log(res);
                    handleClose();
                    setTimeout(() => {
                        navigate('/home');
                    }, 2000);
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }
    return (
        <>

            <div className="w-full flex justify-between">
                <span></span>
                <h1 className="text-3xl lg:text-5xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-violet-200 font-extrabold">
                    Pay your bills now
                </h1>
                <Link to="/home">
                    <GiReturnArrow className="text-3xl lg:text-5xl text-cyan-100 mr-10" />
                </Link>
            </div>
            <div className="w-full h-5/6 rounded-3xl grid grid-cols-1 justify-items-center items-center">
                <button className="w-4/5 btn h-1/3 rounded-l-full" onClick={handleClickOpen}>
                    <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
                        Electricity bill
                    </span>
                </button>
                <button className="w-4/5 btn h-1/3 rounded-l-full">
                    <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
                        Water bill
                    </span>
                </button>
                <button className="w-4/5 btn h-1/3 rounded-l-full">
                    <span className="text-cyan-900 text-3xl lg:text-5xl font-extrabold">
                        Telecom bill
                    </span>
                </button>
            </div>
            <Dialog open={open} onClose={handleClose}>

                <DialogContent>
                    <DialogContentText>
                        Pay your bill securely, and we'll send you a receipt.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Bill number"
                        type="number"
                        fullWidth
                        variant="standard"
                        onChange={(e) => setBillNumber(Number(e.target.value))}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>submit</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export { Bills };