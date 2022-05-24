

export default function AllAnswers({answer, chooseAnsw}) {

      return (
        <div className="quiz quiz-answer" onClick={chooseAnsw}>{answer.answ}</div>
      )
}
