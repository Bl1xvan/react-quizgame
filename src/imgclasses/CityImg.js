import React from 'react'
import newimg from './stockvault-city-of-metal187028.jpg'

class CityImg extends React.Component{
    render(){
      return(
        <div className="quiz quiz-finalcard">
        <h3>Finish Line?</h3>
        <img src={newimg} alt='raito?'  className="img-responsive" />
        </div>
      )
    }
  }

  export default CityImg