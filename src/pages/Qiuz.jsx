import './Quiz.css'
import { jsQuiz } from './Questions'
import { Link } from 'react-router-dom'

const Quiz = () => {
  return (
    <div className="Quiz">
      <h1 className="logo-txt">Quiz.</h1>
      <form>
        {jsQuiz.map((element, questionIndex) => (
          <div key={questionIndex}>
            <label htmlFor="choices">
              <p className="que">{element.question}</p>
            </label>
            {element.choices.map((choice, choiceIndex) => (
              <div key={choiceIndex} className="choice">
                <input
                  type="radio"
                  id={`choices-${questionIndex}-${choiceIndex}`}
                  className="option"
                  name={`choices-${questionIndex}`}
                  value={choice}
                />
                <label
                  htmlFor={`choices-${questionIndex}-${choiceIndex}`}
                  className="item"
                >
                  {choice}
                </label>
                <br />
              </div>
            ))}
          </div>
        ))}
        <Link to="/Table">
          <button className="button">Get your plan</button>
        </Link>
      </form>
    </div>
  )
}

export default Quiz
