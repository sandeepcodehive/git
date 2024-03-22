// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, OAuthProvider } from 'firebase/auth';
import { auth } from "../../Firebase";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            // alert("User signin!")
            console.log("User signed in ", user);
            navigate('/');

        } catch (error) {
            setError(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            console.log("user token", token);

            const user = result.user;
            alert("User signin!")
            console.log("user signed in with goggle", user);
        }
        catch (error) {
            // const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;

            // const credential = GoogleAuthProvider.credentialFromError(error);

            console.error('Google Sign-In Error:', errorMessage);

        }
    };


    const handleGithubSignin = async () => {
        try {
            const provider = new OAuthProvider('github.com');
            const result = await signInWithPopup(auth, provider);

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            console.log("user token is:", token);
            const user = result.user;

            alert("User signin!")
            navigate('/');
            console.log("user signed in with googel:", user);
        }
        catch (error) {
            // const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // Handle error appropriately
            console.error('Google Sign-In Error:', errorMessage);
        }
    }


    const handleAppleSignin = async () => {
        try {
            const provider = new OAuthProvider('apple.com');
            const result = await signInWithPopup(auth, provider);

            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            console.log("user token is:", token);
            const user = result.user;

            alert("User signin!")
            console.log("user signed in with googel:", user);
        }
        catch (error) {
            // const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            // const credential = GoogleAuthProvider.credentialFromError(error);
            // Handle error appropriately
            console.error('Google Sign-In Error:', errorMessage);
        }
    }

    return (
        <div className='containers'>

            <div className="form-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="input-container">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-container">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                    <hr />
                    <button onClick={handleGoogleSignIn}>Sign in with Google</button>
                    <hr />
                    <button onClick={handleGithubSignin}>Sign in with Github</button>
                    <hr />
                    <button onClick={handleAppleSignin}>Sign in with Apple</button>

                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    )
};

export default Login;
