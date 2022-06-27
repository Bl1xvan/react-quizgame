import AllAnswers from './AllAnswers'

export default function OneQuestion({question, addPoint, aCard, moveCards}){
    
const singleCard = '1000px'

function moveCard(){
   moveCards(singleCard)
}

         return(<>
            <div className="quiz quiz-onecard" style={aCard}>
               <div className="quiz quiz-question">What is your {question.ques}?</div>
                  <AllAnswers question={question} addPoint={addPoint} moveCard={moveCard}/>
               </div>
            </>)
      }