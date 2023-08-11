import React, { useEffect, useState } from "react";
import { Navigate, Redirect, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


const RequireAuth = ({ children }) => {

    const accessToken = useSelector((state) => state.auth.accessToken)
    const isLogged = true;
    return (
        isLogged ?
            children :
            <Navigate to="/" />
    )
}

export default RequireAuth