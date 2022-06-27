import AllAnswers from './AllAnswers'

export default function OneQuestion({question, addPoint, allcards, restartGame}){
    
const singleCard = '1000px'

function moveCard(){
   restartGame(singleCard)
}

         return(<>
            <div className="quiz quiz-onecard" style={{left: allcards}}>
               <div className="quiz quiz-question">What is your {question.ques}?</div>
                  <AllAnswers question={question} addPoint={addPoint} moveCard={moveCard}/>
               </div>
            </>)
      }