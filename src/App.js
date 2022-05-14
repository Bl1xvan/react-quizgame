
import './App.css';
import Questions from "./data/questions.json"

function App() {
  return (
  <>
   {Questions.map(question =>{
     return(question.q + " " + question.answer + " ")})}
  </>
  );
}

export default App;
