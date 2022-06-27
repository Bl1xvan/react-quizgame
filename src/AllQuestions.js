import React, {useState} from 'react'
import OneQuestion from './OneQuestion';
import LightImg from './imgclasses/LightImg'

export default function AllQuestions({questions, addPoint}){


   const groupAnimation = '0'
   const [allCards, setAllCards] = useState(0);

   function restartGame(newset){
      setAllCards(newset)
   }


return(
   <>   
   <div className="quiz-allcards">
      {questions.map(question => 
         <OneQuestion key={question.id} question={question} addPoint={addPoint} allCards={allCards} restartGame={restartGame} />
               )
      }
   </div>
   <div className="finalcard">
      <LightImg />
      <button className='restartbutton' onClick={()=>{restartGame(groupAnimation)}}>Start Over</button>
   </div>
   </>
   )
}
 
   






