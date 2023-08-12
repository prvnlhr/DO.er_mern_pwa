import React, { useEffect, useState } from "react";
import { Navigate, Redirect, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";


const RequireAuth = ({ children }) => {

    const accessToken = useSelector((state) => state.auth.accessToken);

    if (accessToken === undefined) {
        // You can show a loading indicator here or just return null
        return null;
    }
    return (
        accessToken ?
            children :
            <Navigate to="/" />
    )
}

export default RequireAuth