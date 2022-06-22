import React, {useState} from 'react'
import AllAnswers from './AllAnswers'



export default function AllQuestions({question, addPoint}){

    const [startAnimation, setStartAnimation] = useState(false);
    function moveCard(){
      setStartAnimation(!startAnimation)
    }
    

    const transitionProperties = startAnimation ? {backgroundColor: question.color, left: '1000px'} : {backgroundColor: question.color}

         return(<>
            <div className="quiz quiz-onecard" style={transitionProperties} >
               <div className="quiz quiz-question">What is your {question.ques}?</div>
                  <AllAnswers question={question} addPoint={addPoint} moveCard={moveCard}/>
               </div>
            </>)
      }
 
   






