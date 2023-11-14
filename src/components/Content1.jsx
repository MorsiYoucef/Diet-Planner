import './Content1.css'
import { Link } from 'react-router-dom'
const Content1 = () => {
  return (
    <div className="all-around">
      <img
        src="./images/left-removebg-preview.png"
        alt="left-img"
        className="human"
      />
      <div className="base-page">
        <h1 className="header-1">Become The Better Version Of Yourself</h1>
        <p className="para">
          Take our Quiz to get a personal meal plan and achieve your weight
          goals!
        </p>
        <h3 className="header-2">Select your gender</h3>
        <div className="buttons">
          <Link to="/Quiz">
            <button className="btn-2">Female</button>
          </Link>
          <button className="btn-1">Male</button>
        </div>
      </div>
      <img
        src="./images/right-removebg-preview.png"
        alt="right-img"
        className="human"
      />
    </div>
  )
}
export default Content1
