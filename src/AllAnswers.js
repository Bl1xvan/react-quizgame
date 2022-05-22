

export default function AllAnswers({answer}) {
      return (
        <div className="quiz quiz-answer" onClick={answer.chooseAnsw}>{answer.answ}</div>
      )
}
