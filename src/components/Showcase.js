import React from "react";
import showcase from "../img/showcase.svg";
import { bounceInLeft, bounceInRight } from "react-animations";
import Radium, { StyleRoot } from "radium";

const styles1 = {
  bounce: {
    animation: "bounce 3s",
    animationName: Radium.keyframes(bounceInLeft, "bounce"),
  },
};

const styles2 = {
  bounce: {
    animation: "bounce 3s",
    animationName: Radium.keyframes(bounceInRight, "bounce"),
  },
};

const Showcase = () => {
  return (
    <StyleRoot>
      <section className="pt bg-dark text-light text-center text-sm-start p-lg-0 pt-lg-5 py-4 mt-5">
        <div className="container">
          <div className="d-sm-flex align-items-center justify-content-between">
            <div>
              <h1 style={styles1.bounce}>
                Become a <span className="text-warning">Web Developer</span>{" "}
              </h1>
              <p className="lead my-4">
                we focus on teaching our students the fundamentals of the latest
                and greatest technologies to prepare them for the first dev role
              </p>
              <button className="btn btn-warning btn-lg text cta-button">
                Start The process{" "}
              </button>
            </div>
            <img
              style={styles2.bounce}
              className="img-fluid w-50 d-none d-sm-block"
              src={showcase}
              alt=""
            />
          </div>
        </div>
      </section>
    </StyleRoot>
  );
};

export default Showcase;
