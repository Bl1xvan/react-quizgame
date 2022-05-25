import React from 'react'

export default function AllAnswers({question}) {
 
  class ShowAnsw extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        chosenAnsw: "",
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
      <div>
          <p>answer: {this.state.chosenAnsw}</p>
        </div>
      <div className="quiz quiz-submit" onClick={this.submitResponse}>Submit</div>
        </>
      );
    }
  }

  return(<ShowAnsw />)  
      
}
