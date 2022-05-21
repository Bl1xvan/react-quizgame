import React from 'react'
import Questions from './data/questions.json'



function AllQuestions(){

  class AllAnswers extends React.Component{
    render(){
      return <div className="quiz quiz-answer">{this.props.answer}</div>
    }
  }
  
  const  DisplayQuestions = Questions.map(question => {
    return(
      <div className="quiz quiz-onecard" key={question.id}>
      <div className="quiz quiz-question">What is your {question.ques}?</div>
      <div className="answer-wrapper">
       { question.answs.map(data => {
          return <AllAnswers key={data.id} answer={data.answ} />
        })}
      </div>
      <div className="quiz quiz-submit">Submit</div>
      </div>
    )
  })

  return(
        <>{DisplayQuestions}</>
  )
}

export default AllQuestions

