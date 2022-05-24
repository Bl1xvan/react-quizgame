

export default function AllAnswers({answer, chooseAnsw, question}) {
  function clickAnsw(){
    chooseAnsw(question.id)
  }
      return (
        <div className="quiz quiz-answer" onClick={clickAnsw}>{answer.answ}</div>
      )
}
