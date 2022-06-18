import AllAnswers from './AllAnswers'
import './AllQuestions.css'

export default function AllQuestions({questions, addPoint}){

   return(<>
      {questions.map(question => 
         <div className="quiz quiz-onecard" key={question.id}>
            <div className="quiz quiz-question">What is your {question.ques}?</div>
               <AllAnswers question={question} addPoint={addPoint} />
            </div>
              )
          }</>)}






