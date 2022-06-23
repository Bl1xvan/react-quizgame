import React, {useState, useEffect} from 'react'
import './App.css';
import Questions from './data/questions.json'
import AllQuestions from './AllQuestions'
import LightImg from './imgclasses/LightImg';


function App() {

  const [questions, setQuestion] = useState([]);
  useEffect(()=>{
    setQuestion(Questions.map(inquiry=>inquiry))
  }, [])


  const [points, setPoints] = useState(0);

  function addPoint(point){
    setPoints(points + point);
  }

  const [notMoved, setNotMoved] = useState({backgroundColor: 'white', left: 0})
  n
  function moveBack(){
    setNotMoved({notMoved})
  }

  return (
    <div className="container">
    <div className="quiz quiz-container">
    <div className="quiz quiz-header"><h1>Quiz Game</h1></div>
    <div className="quiz-allcards">
    {questions.map(question => 
        <AllQuestions key={question.id} question={question} addPoint={addPoint} notMoved={notMoved} />
        )
      }
    <div className="quiz quiz-finalcard">
        <h3>Finish Line?</h3>
        <LightImg />
        <button className="quiz quiz-submit" id="restart" onClick={moveBack}>Start Over?</button>
    </div>
    
    </div>
    </div>
    </div>
  );
}

export default App;
