import React, { useEffect } from 'react'
import axios from 'axios';

function Home() {

  const [jokes, setJokes] = React.useState([]);
  // useEffect(() => {
  //   axios.get('https://official-joke-api.appspot.com/jokes/random')
  //     .then(response => {
  //       setJokes([response.data]);
  //       console.log('Joke fetched:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching jokes:', error);
  //     });
  // }, []);

  useEffect(() => {
    axios.get('/api/jokes')
      .then(response => {
        setJokes(response.data);
        console.log('Jokes fetched:', response.data);
      })
      .catch(error => {
        console.error('Error fetching jokes:', error);
      });
  },[]);


  const handleClick = () => {
    window.location.href = "/resume";
  }

  return (
<div className="ra_home_container">

  <div>
    <p>Free Online Resume Builder</p>
    <p>Build a job-winning resume for free</p>
    <p>
      Your first resume is 100% free forever. Unlimited downloads. 
      No hidden fees. Yes, really 🚀
    </p>
    <button type="button" className="ra_home_cv_button0" onClick={handleClick}>
      Get Started Free CV
    </button>

    <div>
      <br />

      {/* <div>{
        jokes.map((joke, index) => (
          <div key={index}>
            <p>{joke.id} - {joke.setup}</p>
            <p>{joke.punchline}</p>
          </div>
        ))
      }</div> */}
      
      <p>Jokes: {Object.entries(jokes).length}</p>
      <div>{
        Object.entries(jokes).map(([key, joke]) => (
          <div key={key}>
            <p>{key} - {joke.name}</p>
            <p>Age: {joke.age}</p>
          </div>
        ))
      }</div>
    </div>
  </div>
</div>
  )
}

export default Home
