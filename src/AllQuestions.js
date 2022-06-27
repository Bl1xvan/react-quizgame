import React, {useState} from 'react'
import OneQuestion from './OneQuestion';
import LightImg from './imgclasses/LightImg'

export default function AllQuestions({questions, addPoint}){

const [aCard, setACard] = useState({})
const groupMove = {
   left: '0'
}

function moveCards(newset){
   setACard(newset)
}

return(
   <>   
   <div className="quiz-allcards">
      {questions.map(question => 
         <OneQuestion key={question.id} question={question} addPoint={addPoint} aCard={aCard} moveCards={moveCards}/>
               )
      }
   </div>
   <div className="finalcard">
      <LightImg />
      <button className='restartbutton' onClick={()=>{moveCards(groupMove)}}>Start Over</button>
   </div>
   </>
   )
}
 
   






