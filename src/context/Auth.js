import React, { useEffect, useState } from 'react'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "firebase/auth";
import { auth } from '../firebase';
import GoogleButton from 'react-google-button';


const Auth = () => {

    const [user, setUser] = useState({});

    const handleGoogleClick = async() => {
        try{
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        
        } catch (error) {
            console.log(error);
        }

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