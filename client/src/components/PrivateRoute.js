import React, {useEffect, useState} from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';


const PrivateRoute = ({from}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate()

    useEffect(() => {
        if (!user) navigate("/SignIn", {state:{from}})
    }, [user]);

    return user ? <Outlet /> : <></>
}

export default PrivateRoute