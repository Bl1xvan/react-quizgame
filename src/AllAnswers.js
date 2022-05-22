

export default function AllAnswers({answer}, props) {
      return (
        <div className="quiz quiz-answer" onClick={props.chooseAnsw}>{answer.answ}</div>
      )
}
