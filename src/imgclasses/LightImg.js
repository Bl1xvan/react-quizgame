import React from 'react'
import newimg from './images/stockvault-aurora-borealis207582.jpg'

class LightImg extends React.Component{
    render(){
      return(
        <div className="quiz quiz-finalcard">
        <h3>Finish Line?</h3>
        <img src={newimg} alt='raito?'  className="img-responsive" />
        </div>
      )
    }
  }

  export default LightImg