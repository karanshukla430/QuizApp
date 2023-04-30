import React from 'react'
import { Link } from 'react-router-dom'
import '../app.css';

function Start() {

  return (
    <div style={{backgroundColor: 'black'}}>
    <h1 className='Start'>Start Quiz</h1>
    <Link to='/quizes'>
      <button className='button' type="submit">Let's play</button>
    </Link>
    </div>
  )
  
}

export default Start