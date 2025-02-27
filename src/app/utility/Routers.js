import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from "../App";
import Login from "../features/auth/Login";
import ForgotPassword from "../features/auth/ForgetPassword";
import Dashboard from "../dashboard/Dashboard";
import ApplicationBar from "../components/ApplicationBar";
import Profile from "../features/Profile";

function Routers() {
    return (
        <Router>
            <ApplicationBar />
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Dashboard" element={<Dashboard/>}/>
                <Route path="/Profile" element={<Profile/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
            </Routes>
        </Router>
    );
}

export default Routers;
