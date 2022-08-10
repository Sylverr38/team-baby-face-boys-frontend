import { useState } from "react";
import { useEffect } from "react";
import React from "react";

const API_URL = 'http://api.icndb.com/jokes/random';

function Dadjokes() {
  
    const [joke, setJoke] = useState('');

const generateJoke = () => {
  
      fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke));
}

    useEffect(() => {
    },[])
      
  return (
    <div class="wrapper">
      <div class="joke">
        <p>{joke}</p>
      </div>
      <button onClick={generateJoke} >Get a Joke</button>
    </div>
  );
};

export default Dadjokes;