import React, {useState} from 'react'
import AllAnswers from './AllAnswers'



export default function AllQuestions({question, addPoint, notMoved}){

    const [startAnimation, setStartAnimation] = useState(false);
    function moveCard(){
      setStartAnimation(!startAnimation)
    }
    
    const transitionProperties = startAnimation ? {backgroundColor: 'white', left: '1000px'} : {notMoved}

         return(<>
            <div className="quiz quiz-onecard" style={transitionProperties} >
               <div className="quiz quiz-question" style={{backgroundColor: question.color}}>Question: What is your {question.ques}?</div>
                  <AllAnswers question={question} addPoint={addPoint} moveCard={moveCard}/>
               </div>
            </>)
      }
 
   






