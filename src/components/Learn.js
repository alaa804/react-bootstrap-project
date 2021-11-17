import React from "react";
import img from "../img/fundamentals.svg";

const Learn = () => {
  return (
    <section id="learn" className="p-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md">
            <img src={img} alt="" className="img-fluid" />
          </div>
          <div className="col-md p-5">
            <h2 className="fs-1" style={{ color: "#E100FF" }}>
              Learn The Fundamentals
            </h2>
            <p className="lead">
              Welcome to the Learning Area. This set of articles aims to provide
              beginner web developers with everything they need to start
              developing simple websites.
            </p>
            <p className="lead">
              If you are completely new to web development, web development can
              be a real challenge - our goal is to simplify the subject enough
              for you to learn easily, while providing you with enough detail
              for you to be on your own. You should feel at home, whether you
              are a student learning web development (on your own or as part of
              your studies), a teacher looking for course materials, an amateur,
              or someone who just wants to understand the way. which the Web and
              its technologies work.
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

export default Learn;
