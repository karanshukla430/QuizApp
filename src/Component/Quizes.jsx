import React, { useState } from 'react'
import '../app.css'
import { Link, useNavigate } from 'react-router-dom';
import { Questions } from './helpers/Questions';

function Quizes() {
  const [ansArr] = useState([]);
  const navigate = useNavigate()
  const [currQues, setCurrQues] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const handleNextQues=()=>{
    ansArr[currQues]=optionChosen; 
    setCurrQues(currQues+1);
  }

  function handleFinish(){
    ansArr[currQues]=optionChosen;
    let count=0;
    ansArr.map((val,id) => 
    val===Questions[id].answer?count++ : count 
    )
    navigate(`/finalScore/${count}`)
  }

  return (
    <div>
      <div className='quizes'>
        <Link to='/'>
        <div style={{textAlign: 'right',marginRight: '20px'}}>
          <button onClick=
          {
            () => {if(window.confirm("Are you sure going back?")){
              <Link to='/' />
            }}}
            className='button1' type='submit'>Back to Home</button>
        </div>
        </Link>
      </div>
      <div style={{textAlign:'center', position:'relative'}}>
        <h1>{Questions[currQues].prompt}</h1>
        <div>
          <button onClick={ () => setOptionChosen("A")}>{Questions[currQues].optionA}</button>
          <button onClick={ () => setOptionChosen("B")}>{Questions[currQues].optionB}</button>
          <button onClick={ () => setOptionChosen("C")}>{Questions[currQues].optionC}</button>
          <button onClick={ () => setOptionChosen("D")}>{Questions[currQues].optionD}</button>
        </div>
        {currQues === Questions.length-1? (
          <button onClick={handleFinish}>
            Finish Quiz
          </button>
        ) : (
          <button onClick={handleNextQues}>Next Question</button>
        )
        }
        
      </div>
    </div>
  )
}

export default Quizes;