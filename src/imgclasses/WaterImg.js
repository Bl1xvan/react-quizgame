import React from 'react'
import newimg from './images/stockvault-waterfall185855.jpg'

class WaterImg extends React.Component{
    render(){
      return(
        <div className="quiz quiz-finalcard">
        <h3>Finish Line?</h3>
        <img src={newimg} alt='raito?'  className="img-responsive" />
        </div>
      )
    }
  }

  export default WaterImg