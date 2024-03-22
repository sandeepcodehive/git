import React, { useState } from 'react';
import axios from 'axios';


function About() {
  const [responses, setResponse] = useState([]);
  const [userInput, setUserInput] = useState('');

  const fetchs = () => {
    axios.get('/get_response')
      .then(response => {
        console.log(response.data)
        setResponse(response.data.response);
      })
      .catch(error => {
        console.log("error fetching response", error);
      });
  }

  const posts = () => {
    axios.post('/post_response', { user_input: userInput })
      .catch(error => {
        console.log('Error getting response:', error);
      });
  }

  const submitUserInput = () => {
    // Send user input to the Flask server and get the response
    posts();
    // Clear the user input field
    setUserInput('');

    fetchs();
  };

  return (
    <>
      <div className="container  d-flex justify-content-between">
        <span className="navbar-brand">Datasets</span>
        <div className="btn-group">
          <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            DS connection
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li><a className="dropdown-item" href="/">SQL</a></li>
            <li><a className="dropdown-item" href="/">DB</a></li>
            <li><a className="dropdown-item" href="/">Azure</a></li>
          </ul>
        </div>
      </div>


      <section className='prompt-div'>
        <div className='cont' style={{ backgroundColor: "#8EC5FC",backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)"}}>
        <div>
          {responses.map((response, ind) => (<div key={ind} style={{ fontSize: "20px" }}>This is your prompt: {response}</div>))}
        </div>
      </div>
    </section >


      <div className='footer'>
        <div className="input-group mb-3" >
          <input type="text" className="form-control" placeholder="type prompt" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
          <button className="btn btn-primary" type="button" onClick={submitUserInput}>Send</button>
        </div>
      </div>
        </>
    )
}

export default About;