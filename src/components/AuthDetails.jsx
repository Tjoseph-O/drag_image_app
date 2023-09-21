
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { auth } from "./Firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);

                navigate("/");
            } else {
                setAuthUser(null);
            }
        });


        return () => {
            unsubscribe();
        };
    }, [navigate]);

    const userSignOut = () => {
        signOut(auth)
            .then(() => {


            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            {authUser ? (
                <>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <button onClick={userSignOut}>Sign Out</button>
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
};

export default AuthDetails;