import React from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
function MyRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
    )
}

export default MyRoutes;