import './Content2.css'

const Content2 = () => {
  return (
    <div className="buttom">
      <h1 style={{ fontSize: '40px', width: '700px' }}>
        Learn more about healthy lifestyle and nutrition
      </h1>
      <div className="package">
        <div className="package-content">
          <button className="button-27">
            <img src="./images/img1.jpg" alt="imag-1" className="hook" />
          </button>
          <h3 className="def">
            Celery Leaves: Why You Should Add Celery Greens Into Your Diet
          </h3>
        </div>
        <div className="package-content">
          <button className="button-27">
            <img
              src="./images/pineapple-juice.jpeg"
              alt="imag-2"
              className="hook"
            />
          </button>
          <h3 className="def">
            Benefits of Drinking Pineapple Water and Is It Really Good For You
          </h3>
        </div>
        <div className="package-content">
          <button className="button-27">
            <img src="./images/push-ups.jpg" alt="imag-3" className="hook" />
          </button>
          <h3 className="def">
            I did a 30-day Push-Ups Challenge to Build My Upper-Body & Here's My
            Results Isobel Krüger
          </h3>
        </div>
        <div className="package-content">
          <button className="button-27">
            <img
              src="./images/Turmeric-Root-Oil.jpg"
              alt="imag-4"
              className="hook"
            />
          </button>
          <h3 className="def">
            Why is Turmeric Bad for Weight Loss: 3 Reasons to Consider
          </h3>
        </div>
        <div className="package-content">
          <button className="button-27">
            <img src="./images/oil-olive.jpg" alt="imag-5" className="hook" />
          </button>
          <h3 className="def">
            Benefits of Drinking Olive Oil Before Bed According to Science
          </h3>
        </div>
      </div>
      <a href="https://leetcode.com/" style={{ textDecoration: 'none' }}>
        <h2 className="article-title">All Articles{'\n >>'}</h2>
      </a>
    </div>
  )
}

export default Content2
