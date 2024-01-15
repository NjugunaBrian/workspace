import React, { useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, signInWithRedirect, onAuthStateChanged, signOut} from "firebase/auth";
import { auth } from '../firebase';
import GoogleButton from 'react-google-button';


const Auth = () => {

    const [user, setUser] = useState({});

    const handleGoogleClick = async() => {
        try{
        const provider = new GoogleAuthProvider();
        const result = await signInWithRedirect(auth, provider);
        const user = result.user;
        
        } catch (error) {
            console.log(error);
        }

    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            console.log("User", user);
        });
        
    }, [])
    return (
        <div className='flex items-center justify-center mt-5'>
            <button onClick={handleGoogleClick} type='button' title='Continue with Google' >
                <GoogleButton />
            </button>
        </div>
    )
}

export default Auth