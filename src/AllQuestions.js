import React from 'react'
import AllAnswers from './AllAnswers'

export default function AllQuestions({questions}){

          return(<>
          {questions.map(question => 
            <div className="quiz quiz-onecard" key={question.id}>
            <div className="quiz quiz-question">What is your {question.ques}?</div>
               <AllAnswers question={question}/>
            </div>
            )
        }</>)

        }





