import React, {useState} from 'react'
import AllAnswers from './AllAnswers'

export default function AllQuestions({questions}){

      const [clickedAnsw, setClickedAnsw] = useState("");

      function displayAnsw(e){
        return setClickedAnsw(e.target.innerText)
      }

      return(<>{questions.map(question => 
        <div className="quiz quiz-onecard" key={question.id}>
        <div className="quiz quiz-question">What is your {question.ques}?</div>
        <div className="answer-wrapper">
         { question.answs.map(answer => {
            return <AllAnswers answer={answer} key={answer.id} displayAnsw={displayAnsw} />
          })}
          <div className='quiz quiz-clicked' >
          answer: 
          </div>
        </div>
        <div className="quiz quiz-submit">Submit</div>
        </div>
        )
    }</>)
    }




