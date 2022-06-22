import React from 'react'

export default function AllAnswers({question, addPoint, moveCard}){

  class ShowAnsw extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chosenAnsw: "",
        chosenPt: 0,
        right: 0
      };
    }

    chooseAnsw = (word, num) => {
      this.setState({chosenAnsw: word});
      this.setState({chosenPt: num})
    }

    submitResponse = () =>{
      addPoint(this.state.chosenPt);
      moveCard();
    }
    
    
    render() {
      return (
        <>
      <div className="answer-wrapper">
        {question.answs.map(answer => 
          <div key={answer.id} className="quiz quiz-answer" onClick={()=>{this.chooseAnsw(answer.answ, answer.pt)}}>{answer.answ}</div>
        )}
      </div>
      <div className="quiz show-answer">
          <p>answer: {!this.state.chosenAnsw ? <small style={{color: "red", fontSize: "0.75em"}}>required to continue</small>: this.state.chosenAnsw}</p>
      </div>
      <button className="quiz quiz-submit" onClick={this.submitResponse} disabled={this.state.chosenAnsw===""}>Submit</button>
        </>
      );
    }
  }

  return(<ShowAnsw />)        
}
