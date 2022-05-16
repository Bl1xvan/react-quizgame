
import './App.css';
import Questions from "./data/questions.json"

function App() {
  return (
    <div class="container">
      <div class="quiz quiz-container">
      <div class="quiz quiz-header"><h1>Quiz Game</h1></div>
    <div class="quiz-allcards">
   {Questions && Questions.map(question=>{
      return(     
        <div class="quiz quiz-onecard" key={question.id}>
          <div class="quiz quiz-question">What is your {question.q}?</div>
          <div class="answer-wrapper">
              <br />
              <div class="quiz quiz-answer">a. {question.a}</div>
              <div class="quiz quiz-answer">b. {question.b}</div>
              <div class="quiz quiz-answer">c. {question.c}</div>
              <div class="quiz quiz-answer">d. {question.d}</div>
          </div>
          <div class="quiz quiz-submit">Submit</div>
        </div>
     )})}
     </div>
     </div>
     </div>
  );
}

export default App;
