import {Component} from 'react'
import AllAnswers from './AllAnswers'

export default function AllQuestions({questions}){
      class ShowAnsw extends Component{
        constructor(props){
          super(props);
          this.state ={
            chosenAnsw : ""
          };
        }
        chooseAnsw = (event) => {
          this.setState({
            chosenAnsw: event.target.innerText
          })
        }

        render(){
          return(<>{questions.map(question => 
            <div className="quiz quiz-onecard" key={question.id}>
            <div className="quiz quiz-question">What is your {question.ques}?</div>
            <div className="answer-wrapper">
             { question.answs.map(answer => {
                return <AllAnswers answer={answer} key={answer.id}  />
              })}
              <div className='quiz quiz-clicked'>
              answer: {this.state.chosenAnsw}
              </div>
            </div>
            <div className="quiz quiz-submit">Submit</div>
            </div>
            )
        }</>)

        }

        
      }

      return(<ShowAnsw />)
    }




