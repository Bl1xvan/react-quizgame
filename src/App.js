
import React, {useState, useEffect} from 'react'
import './App.css';
import Questions from './data/questions.json'
import AllQuestions from './AllQuestions'

function App() {

  const [questions, setQuestion] = useState([]);
  useEffect(()=>{
    setQuestion(Questions.map(inquiry=>inquiry))
  }, [])

  const [points, setPoints] = useState(0);


  function addPoint(point){
    setPoints(points + point);
  }

  return (
    <div className="container">
    <div className="quiz quiz-container">
    <div className="quiz quiz-header"><h1>Quiz Game</h1></div>
    <div className="quiz-allcards">
        <AllQuestions questions={questions} addPoint={addPoint}/>
    </div>
    </div>
    </div>
  );
}

export default App;
