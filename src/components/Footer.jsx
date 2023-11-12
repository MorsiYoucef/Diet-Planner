import './Footer.css'

const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <ul className="txtfooter">
          {' '}
          <h3 style={{ marginBottom: '10px' }}>Product</h3>
          <li>Reviews</li>
          <li>My Meal Plan</li>
          <li>My Subscription</li>
          <li>Contact Support</li>
        </ul>
      </div>
      <div>
        <ul className="txtfooter">
          {' '}
          <h3 style={{ marginBottom: '10px' }}>Useful Resources</h3>
          <li>Blog</li>
          <li>Cooking Hub</li>
        </ul>
      </div>
      <div>
        <ul className="txtfooter">
          {' '}
          <h3 style={{ marginBottom: '10px' }}>Terms & Policies</h3>
          <li>Refund policy</li>
          <li>Privacy policy</li>
          <li>Terms of service</li>
          <li>Subscription Terms</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
      <div>
        <ul className="txtfooter">
          {' '}
          <h3 style={{ marginBottom: '10px' }}>Company</h3>
          <li>About Us</li>
          <li>Contact Us</li>
          <img
            src="./images/healthy-life.png"
            alt="leaves"
            style={{
              width: '50px',
              height: '50px',
              marginLeft: '50px',
              marginTop: '20px',
            }}
          />
        </ul>
      </div>
    </div>
  )
}
export default Footer
