import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { useState } from 'react';
import axios from 'axios';


const Profilepage = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [user, setUserProfile] = useState({});

    const onTitleChange = e => setTitle(e.target.value);
    const onBodyChange = e => setBody(e.target.value);

    let userId = JSON.parse(localStorage.getItem("userId"))


    // axios.get("http://localhost:3000/User" + user.gamerID ).then(userProfile => {
    //     console.log(userProfile)
    //     setUserProfile(userProfile);
    // })





    useEffect(() => {

        console.log(userId)

        function fetch() {
            axios.get("http://localhost:3000/User/" + userId).then(response => {
                console.log(response)

                setUserProfile(response.data)
            })
        }

        fetch();

    }, [])


    const handleSubmit = e => {
        e.preventDefault();

        const data = { title, body };
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        };
        fetch("https://localhost:3000/User", requestOptions)
            .then(response => response.json())
            .then(res => console.log(res));
    };
    return (
        <div className="container bg-primary d-flex flex-column">
  <div className="row">
    <div className="col p-3 text-center">
      <Navbar />
    </div>
  </div>

  <div className="row">
    <div className="col md-3 
 mx-auto">

  <div>
    <h1>Welcome, {user.gamerID}</h1>
  </div>
  <div>
  <img className="profpic mx-auto d-block my-5" src={ require('../../src/images/page_bkgnds/jan.jpg') } />
  </div>
    </div>
    <div className="col">
        
  <div>
    <h3>High Scores Placeholder</h3>
  </div>
    </div>
  </div>
  <div className="row">
    <div className="col">

  <div>
    <div className="Post">
      <form>
      <label className="mr-3">Post Title:</label>
        <input className="my-3 input" value={title} onChange={onTitleChange} required />
        <br></br>
      <label className="mr-3">Post Body:</label>
        <textarea value={body} onChange={onBodyChange} required />
        <br></br>
        <button className='mt-3' type="submit" onClick={handleSubmit}>
          Create Post
        </button>
      </form>
    </div>
  </div>
    </div>
    <div className="col">
        
  <div>
    <h3>Joke of the Day Placeholder</h3>
  </div>
    </div>
  </div>
  <div className="row footer">
        <div className="col text-center p-3">
          <Footer />
        </div>
      </div>
</div>
    );
};

export default Profilepage;
