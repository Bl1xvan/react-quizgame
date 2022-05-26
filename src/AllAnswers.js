import React from 'react'

export default function AllAnswers({question}) {

 
  class ShowAnsw extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chosenAnsw: ""
      };
    }
    chooseAnsw = (e) => {
      this.setState({chosenAnsw: e.target.innerText});
    }

    submitResponse = () =>{
      console.log(this.state.chosenAnsw)
    }
    
    
    render() {
      return (
        <>
      <div className="answer-wrapper">
        {question.answs.map(answer => 
          <div className="quiz quiz-answer" onClick={this.chooseAnsw}>{answer.answ}</div>
        )}
      </div>
      <div className="quiz show-answer">
          <p>answer: {!this.state.chosenAnsw ? 'required to continue': this.state.chosenAnsw}</p>
      </div>
      <button className="quiz quiz-submit" onClick={this.submitResponse} disabled={this.state.chosenAnsw===""}>Submit</button>
        </>
      );
    }
  }

  return(<ShowAnsw />)        
}
