import Home from '../pages/Home ';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from 'react-router-dom';
import Withdraw from '../pages/Withdraw';
import Bills from '../pages/Bills';
import Cash from '../pages/Cash';
import Car from '../pages/Car';
import Booking from '../pages/Booking';
import MobileRecharge from '../pages/MobileRecharge';
import React from 'react';
const AppRouter: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" />
            <Route index element={<Home />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/bills" element={<Bills />} />
            <Route path="/cash" element={<Cash />} />
            <Route path="/car" element={<Car />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/mobile" element={<MobileRecharge />} />
        </Routes>
    </Router>
)



export { AppRouter }