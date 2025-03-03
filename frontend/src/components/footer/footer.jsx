import "./footer.css";

export default function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src="./Images/logo.png" alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            fugiat voluptate, libero, iste quod nemo enim nisi dicta quos odit
            hic quia. Minus hic id blanditiis vero quae mollitia nisi?
          </p>
          <div className="footer-social-icons">
            <img src="./Images/facebook_icon.png" alt="" />
            <img src="./Images/twitter_icon.png" alt="" />
            <img src="./Images/linkedin_icon.png" alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Deleviry</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-234-567-9890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr/>
        <p className="footer-copyright">
          Copyright 2024 @ Tomato.com - All Rights Reserved
        </p>
    </div>
  );
}
