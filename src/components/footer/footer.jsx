import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
      <div className="footer">
        <div className="about-info">
          <div>
            <h2>About mobb</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
              repudiandae doloribus nemo voluptate provident consectetur minus
              architecto tempore cum sed.
            </p>
            <Link>about</Link>

          </div>
        </div>
        <div className="contact-info">
          <h2>contact details</h2>
          <p>email:email@gmail.com</p>
          <p>phone:+880 1592503803</p>
          <p>social media links</p>
          <div>
            <a href="instagram.com">instagram</a>{" "}
            <a href="facebook.com">facebook</a>
          </div>
        </div>
      </div>
  );
}

export default Footer;
