import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signout } from "../../actions/auth";

import Loading from "./Loading"

const SignOut = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {state} = useLocation()
    const from = state?state.from:"/"
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));    

    

    useEffect(() => {
      dispatch(signout()).then(()=>navigate(from))

    }, [user]);

    return (
      <Loading/>
    );
  }


export default (SignOut);
