import React from 'react'
import { GoogleAuthProvider, signInWithRedirect, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import GoogleButton from 'react-google-button';

export const Auth = () => {
    return (
        <div className='flex items-center justify-center mt-5'>
            <button onClick={handleGoogleClick} type='button' title='Continue with Google' >
                <GoogleButton />
            </button>
        </div>
    )
}
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}


export const handleGoogleClick = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithRedirect(auth, provider);
        //result.user;
        return result

    } catch (error) {
        console.log(error);
    }
}


export const logOut = () => {
    return auth.signOut();
}


