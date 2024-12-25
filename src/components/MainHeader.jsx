import {Link} from "react-router-dom"
import Mainjump from "../images/main_header.png"

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100DaysOfWorkout</h4>
          <h1>Join The Legends of this Fitness Journey</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, nam et? 
            Assumenda deserunt voluptate voluptates! 
          </p>
          <Link to="/plans" className="btn lg">Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Mainjump} alt="Main Header Jump" />
          </div>
        </div>
      </div>
    </header>
  )
    
}

export default MainHeader