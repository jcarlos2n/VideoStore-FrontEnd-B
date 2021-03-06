
import React, { useState, useEffect } from "react";
import "./Login.scss"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, userData } from "../userSlice"

const Login = props => {

    const [credentials, setCrendentials] = useState({ email: '', password: '' });
    const [msgError, setMsgError] = useState("");

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const credenciales = useSelector(userData);

    const updateCredentials = (event) => {
        setCrendentials({ ...credentials, [event.target.name]: event.target.value })
    }


    useEffect(() => {
        if (credenciales?.token !== '') {
            navigate('/login');
        };
    }, []);

    const nosLogea = () => {
        if (! /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(credentials.email)) {
            setMsgError('Reenter a valid email');
            return;
        }

        if (credentials.password.length > 4) {
            if (/^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*+-_=?/])(?=.{8,})/.test(credentials.password)) {
                setMsgError('Password is not correct');
                return;
            }
        } else {
            setMsgError('Password must have more than 4 characters');
            return;
        }

        setMsgError('');
        dispatch(loginUser({
            email: credentials.email,
            password: credentials.password
        }));

        setTimeout(() => {
            navigate("/")
        }, 1000)

    };


    return (
        <div className="loginWall">

            <label className="labelItemLogin">
                Email
            </label>
            <input className="inputItemLogin" type="email" name="email" onChange={updateCredentials} />

            <label className="labelItemLogin">
                Password
            </label>
            <input className="inputItemLogin" type="password" name="password" onChange={updateCredentials} />

            <input className="submitLoginItem" type="submit" value="LOG IN" onClick={() => nosLogea()} />

            <div className="errorMessage">
                {msgError}
            </div>

        </div>
    )

}

export default Login