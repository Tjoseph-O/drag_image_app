import "../../App.css";

import React, {useRef, useState} from "react";

import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from "../Firebase";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pwd)
            .then((userCredential) => {


                navigate("draging")

            })
            .catch((error) => {
                console.log(error);
                // if sign-in errors comes up.....what should be done
            });
    };




    return (
        <section className="main">
            <p ref={errRef} className={errMsg ? "errmsg" :
                "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className="header" >Welcome To The Box Drop Image Website</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-Mail:</label>
                <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />

                <button type="submit">Sign In</button>
            </form>
        </section>
    );
};

export default SignIn;

