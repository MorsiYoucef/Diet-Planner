import './Content3.css'
import { Link } from 'react-router-dom'
const Content3 = () => {
  return (
    <div className="footer">
      <img
        src="./images/unimeal.com_-removebg-preview.png"
        alt="lastOne"
        className="imgFooter"
      />
      <div className="textFooter">
        <h1>Diet Planner inspires with fun & result!</h1>
        <h4>Get your personal meal plan, daily motivation and eating tips</h4>
        <h2>Select your gender</h2>
        <div className="buttons">
          <Link to="/Quiz">
            <button className="btn-2" style={{ marginTop: '30px' }}>
              Female
            </button>
          </Link>

          <Link to="/Quiz">
            <button className="btn-1" style={{ marginTop: '30px' }}>
              Male
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Content3
