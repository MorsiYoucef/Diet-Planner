import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <section className="Top-Bar">
      <img
        className="logo-img"
        src="./images/final-logo-removebg-preview.png"
        alt="my-logo"
      />
      <ul className="right">
        <Link to="/" className="a">
          <li>Home</li>
        </Link>
        <Link to="/ContactUs">
          <li>Contact-us</li>
        </Link>
      </ul>
    </section>
  )
}

export default Header
