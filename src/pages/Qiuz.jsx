import './Quiz.css'
// import { jsQuiz } from './Questions'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Header from '../components/Header'

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const jsQuiz = [
    {
      question: 'Choose your body type',
      choices: ['Ectomorph', 'Mesomorph', 'Endomorph', 'Not sure'],
    },
    {
      question: 'why do you want to lose weight?',
      choices: [
        'To Change My life',
        'To get healthier',
        'To look more attractive',
        'To feel comfortable with my body',
      ],
    },
    {
      question: 'How do you want to lose weight?',
      choices: [
        'At a healthy pace',
        'As quickly as possible',
        'Something in between',
      ],
    },
    {
      question: 'how do you typically spend your day?',
      choices: [
        'Sitting all day long at work',
        'I am always on my feet',
        'Doing lots of physical activity',
        'Stying at home',
      ],
    },
    {
      question: 'How would you describe the variety in your weekly diet?',
      choices: [
        'I mostly eat the same meals',
        'My diet varies a lot from day to day',
        'It depends',
      ],
    },
    {
      question: 'Do you workout?',
      choices: [
        "No, I don't",
        '1-2 times a week',
        '3-5 times a week',
        'More than 5 times a week',
      ],
    },
  ]

  const handleNextClick = (event) => {
    event.preventDefault()
    setCurrentQuestion((prevQuestion) => prevQuestion + 1)
  }

  return (
    <div className="holpage">
      <Header />
      <div className="Quiz">
        <h1 className="logo-txt">Quiz.</h1>
        <form>
          <label>
            <h3 style={{ marginBottom: '20px' }}>
              {jsQuiz[currentQuestion].question}
            </h3>
            {jsQuiz[currentQuestion].choices.map((choice, index) => (
              <div key={index}>
                <input
                  type="radio"
                  name="choices"
                  id={`choice${index}`}
                  className="option"
                  value={choice}
                />
                <label htmlFor={`choice${index}`} className="choice">
                  {choice}
                </label>
                <br />
              </div>
            ))}
          </label>
          <br />
          {currentQuestion === jsQuiz.length - 1 ? (
            <Link to="/Table">
              <button className="button">Get your plan</button>
            </Link>
          ) : (
            <button
              className="button"
              onClick={(event) => handleNextClick(event)}
            >
              Next
            </button>
          )}
        </form>
      </div>
    </div>
  )
}

export default Quiz
