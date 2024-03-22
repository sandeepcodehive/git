// SignUp.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase'; // Import auth instance from firebase.js
import "./Signup.css";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // User signed up successfully
            setEmail('');
            setPassword('');
            console.log(userCredential.user);
            alert("Successfully register!");
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='containers'>
            <div className="form-box">
                <h2>Sign Up</h2>
                <form onSubmit={handleSignUp}>
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
                    <button type="submit">Sign Up</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default SignUp;
