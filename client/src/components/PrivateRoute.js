import React, {useEffect} from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";


const PrivateRoute = ({from}) => {
    const [user, loadingUser, error] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) navigate("/SignIn", {state:{from}})
    }, [user, loadingUser]);

    return user ? <Outlet /> : <></>
}

export default PrivateRoute