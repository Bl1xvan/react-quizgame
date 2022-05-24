import AllAnswers from './AllAnswers'
import ShowAnsw from './ShowAnsw'

export default function AllQuestions({questions}){
  function chooseAnsw(id){
    console.log(id);
  }
          return(<>{questions.map(question => 
            <div className="quiz quiz-onecard" key={question.id}>
            <div className="quiz quiz-question">What is your {question.ques}?</div>
            <div className="answer-wrapper">
             { question.answs.map(answer => {
                return <AllAnswers answer={answer} chooseAnsw={chooseAnsw} question={question}/>
              })}
              <ShowAnsw question={question}/>
            </div>
            <div className="quiz quiz-submit">Submit</div>
            </div>
            )
        }</>)

        }





