import './Header.css'

const Header = () => {
  return (
    <section className="Top-Bar">
      <img
        className="logo-img"
        src="./images/final-logo-removebg-preview.png"
        alt="my-logo"
      />
      <ul className="right">
        <li>Home</li>
        <li>Contact-us</li>
      </ul>
    </section>
  )
}

export default Header
