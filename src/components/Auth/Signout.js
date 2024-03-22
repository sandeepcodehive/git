import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
// import { auth } from '../../Firebase';
import { useNavigate } from 'react-router-dom';

const Signout = () => {

    const navigate = useNavigate();

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('User signed out successfully');
                // You can do further actions here, like redirecting to another page
                navigate('/login');
            })
            .catch((error) => {
                // An error happened.
                console.error('Sign-out error:', error);
            });
    };

    return (
        // .containers {
        //     display: flex;
        //     justify-content: center;
        //     align-items: center;
        //     height: 50%;
        // }
        <div className='container' style={{display:"flex",justifyContent:"center",height:"50%"}}>
            <button onClick={handleSignOut} style={{backgroundColor:"red"}}>Sign Out</button>
        </div>
    );
};

export default Signout;
