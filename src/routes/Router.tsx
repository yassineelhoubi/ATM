import Home from '../pages/Home ';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from 'react-router-dom';

import Bills from '../pages/Bills';
import Car from '../pages/Car';
import Booking from '../pages/Booking';
import MobileRecharge from '../pages/MobileRecharge';
import React from 'react';
import { Login } from '../pages/Login';
import { Balance, Withdraw } from '../pages';
const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" />
            <Route index element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/cash" element={<Balance />} />
            <Route path="/car" element={<Car />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/mobile" element={<MobileRecharge />} />
        </Routes>
    </Router>
)



export { AppRouter }