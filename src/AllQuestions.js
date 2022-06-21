import React from 'react'
import AllAnswers from './AllAnswers'


export default function AllQuestions({question, addPoint}){

   const styles = {
      width: '100%',
      backgroundColor: '#ffc2ed',
      transitionProperty: 'margin-right',
      transitionDuration: '1s'
    }
   
   return(<>
         <div className="quiz quiz-onecard" key={question.id} style={{styles}} >
            <div className="quiz quiz-question">What is your {question.ques}?</div>
               <AllAnswers  question={question} addPoint={addPoint} moveCard={this.moveCard}/>
            </div>
         </>)
  
      
   }





