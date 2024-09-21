import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>
          <Link to={"/"}>mobb</Link>
        </h1>
      </div>
      <div className="nav-quick-links">
        <ul>
          <li>
            <Link to={"/products"} className="links">
              products
            </Link>
          </li>
          <li>
            <Link to={"/about"} className="links">
              about
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="links">
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
