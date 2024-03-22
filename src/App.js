import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import SignUp from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Signout from './components/Auth/Signout';



function App() {

  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setloading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading indicator while authentication status is being checked
  }

  return (
    <Router>
      <Fragment>
        <div className="container-fluid ">
          <div className="row">
            <nav className="col-lg-2 bg-dark">
              <ul className="navbar-nav flex-column">
                {user ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/home" style={{ color: "white" }}>Chat</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/dataset" style={{ color: "white" }}>Datasets</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/setting" style={{ color: "white" }}>Setting</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/signout" style={{ color: "white" }} >Sign Out</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login" style={{ color: "white" }}>Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/sign" style={{ color: "white" }}>Signup</Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>



            <div className="col-lg-10">
              <Routes>
                {user?<>
                  <Route path="/home" element={<Home />} />
                  <Route path="/dataset" element={<About />} />
                  <Route path="/setting" element={<Contact />} />
                </>
                :null}

                <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
                <Route path='/sign' element={user ? <Navigate to="/" /> : <SignUp />} />
                <Route path='/signout' element={<Signout />} />


                <Route path="*" element={user ? null : <Navigate to="/login" />} />
              </Routes>
            </div>
          </div>
        </div>
      </Fragment>
    </Router>
  );
}

export default App;
