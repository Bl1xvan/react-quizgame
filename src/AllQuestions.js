import React, {useState} from 'react'
import AllAnswers from './AllAnswers'



export default function AllQuestions({question, addPoint}){

   const styles = {
      width: '100%',
      backgroundColor: '#ffc2ed',
      position: 'absolute',
      top: '0'
    }

    const [right, setRight] = useState(0);
    function moveCard(){
      setRight(500)
    }
         return(<>
            <div className="quiz quiz-onecard" style={{...styles, right: `${right}px`}} >
               <div className="quiz quiz-question">What is your {question.ques}?</div>
                  <AllAnswers question={question} addPoint={addPoint} moveCard={moveCard}/>
               </div>
            </>)
      }
 
   






