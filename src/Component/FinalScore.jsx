import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Questions } from './helpers/Questions';

function FinalScore() {
    const params = useParams();
    const [finalScore, setFinalScore] = useState(0);
    useEffect(() => {
        setFinalScore(params.ans);
    },[])
  return (
    <div>FinalScore:{finalScore}/{Questions.length}</div>
  )
}

export default FinalScore