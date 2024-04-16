import React  from 'react'
import { GoogleAuthProvider, signInWithRedirect, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import GoogleButton from 'react-google-button';

export const Auth = () => {
    const doCreateUserWithEmailAndPassword = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithRedirect(auth, provider);
            //result.user;
            return result

        } catch (error) {
            console.log(error);
        }
    }


    const logOut = () => {
        return auth.signOut();
    }



    return (
        <div className='flex items-center justify-center mt-5'>
            <button onClick={handleGoogleClick} type='button' title='Continue with Google' >
                <GoogleButton />
            </button>
        </div>
    )
}


