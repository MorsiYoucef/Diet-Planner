import './Content4.css'
const Content4 = () => {
  return (
    <div className="stuff">
      <h1 style={{ fontSize: '40px' }}>What you get with Diet Planner</h1>
      <div className="sub-stuff">
        <img
          src="./images/CUSTOM-MEAL-PLANS.jpg"
          alt="item1"
          className="img-item"
        />
        <div className="sub-txt">
          <h1>Personalized meal plan</h1>
          <p className="parag">
            Сontains ingredients, step-by-step preparation, extra recipes to
            swap and nutritional value.
          </p>
        </div>
      </div>
      <div className="sub-stuff">
        <div className="sub-txt">
          <h1>Fat-burning workouts</h1>
          <p className="parag">
            Tell us about yourself so that we can create a personalized meal
            plan tailored to your needs, preferences, and goals.
          </p>
        </div>
        <img
          src="./images/anothermenwomen.jpg"
          alt="item1"
          className="img-item"
          style={{ width: '450px' }}
        />
      </div>
      <div className="sub-stuff">
        <img
          src="./images/sms.jpg"
          alt="item1"
          className="img-item"
          style={{ width: '450px' }}
        />
        <div className="sub-txt">
          <h1>Professional support</h1>
          <p className="parag">
            Don’t hesitate to ask your question. We are here to help you solve
            any kind of difficulty 24/7
          </p>
        </div>
      </div>
      <div className="sub-stuff">
        <div className="sub-txt">
          <h1>Healthy lifestyle basics</h1>
          <p className="parag">
            Educate yourself on how to develop a healthier lifestyle. Know more
            about eating, sleep, sex, stress etc.
          </p>
        </div>
        <img
          src="./images/lastone.png"
          alt="item1"
          className="img-item"
          style={{ width: '450px' }}
        />
      </div>
    </div>
  )
}
export default Content4
