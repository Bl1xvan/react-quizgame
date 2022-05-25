import React from 'react'
import AllAnswers from './AllAnswers'

export default function AllQuestions({questions}){

          return(<>{questions.map(question => 
            <div className="quiz quiz-onecard" key={question.id}>
            <div className="quiz quiz-question">What is your {question.ques}?</div>
            <div className="answer-wrapper">
               <AllAnswers question={question}/>
            </div>
            <div className="quiz quiz-submit">Submit</div>
            </div>
            )
        }</>)

        }





