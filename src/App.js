
import './App.css';
import AllQuestions from './AllQuestions'

function App() {

  return (
    <div className="container">
    <div className="quiz quiz-container">
    <div className="quiz quiz-header"><h1>Quiz Game</h1></div>
    <div className="quiz-allcards">
        <AllQuestions />
    </div>
    </div>
    </div>
  );
}

export default App;
