import React from "react";
import { Link } from "react-router-dom";
import { bounceIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles = {
  bounce: {
    animation: "bounce 3s",
    animationName: Radium.keyframes(bounceIn, "bounce"),
  },
};

const Navbar = () => {
  return (
    <StyleRoot>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info gradient fixed-top " id="nav">
        <div className="container">
          <a
            style={styles.bounce}
            href="!#"
            className="navbar-brand fs-3 text1 btn-inline-block mx-auto"
          >
            Bootcamp
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/register" className="nav-link fs-5">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <a href="#learn" className="nav-link fs-5">
                  What you will learn
                </a>
              </li>
              <li className="nav-item">
                <a href="#questions" className="nav-link fs-5">
                  Questions
                </a>
              </li>
              <li className="nav-item">
                <a href="#instructors" className="nav-link fs-5">
                  Instructors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </StyleRoot>
  );
};

export default Navbar;
