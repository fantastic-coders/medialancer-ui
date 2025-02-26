import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from "../App";
import Login from "../features/auth/Login";
import ForgotPassword from "../features/auth/ForgetPassword";
import Dashboard from "../dashboard/Dashboard";
import Header from "../components/Header";

function Routers() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/Dashboard" element={<Dashboard/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/ForgotPassword" element={<ForgotPassword/>}/>
            </Routes>
        </Router>
    );
}

export default Routers;
