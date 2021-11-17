import React from "react";
import img from "../img/react.svg";

const LearnReact = () => {
  return (
    <section id="learn" className="p-5 bg-dark text-light">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img src={img} alt="" className="img-fluid" />
          </div>
          <div className="col-md p-5">
            <h2 className="fs-1" style={{ color: "#E100FF" }}>
              Learn React
            </h2>
            <p className="lead">
              ReactJS offers graceful solutions to some of front-end
              programming’s most persistent issues, allowing you to build
              dynamic and interactive web apps with ease. It’s fast, scalable,
              flexible, powerful, and has a robust developer community that’s
              rapidly growing. There’s never been a better time to learn React.
            </p>
            <p className="lead">
              You’ll develop a strong understanding of React’s most essential
              concepts: JSX, class and function components, props, state,
              lifecycle methods, and hooks. You’ll be able to combine these
              ideas in React’s modular programming style.
            </p>
            <a href="#!" className="btn btn-lg btn-secondary mt-3">
              <i className="bi bi-chevron-right"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnReact;
