import React from 'react'

export default function AllAnswers({answer, displayAnsw}) {
  return (
     <div className="quiz quiz-answer" onClick={displayAnsw}>{answer.answ}</div>
  )
}
