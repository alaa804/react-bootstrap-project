import React from "react";

const Boxes = () => {
  return (
    <section className="p-5 hover">
      <div className="container">
        <div className="row text-center gap-3 text1 hover2">
          <div className="col-md">
            <div className="card bg-dark text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-laptop"></i>
                </div>
                <h3 className="card-title mb-3">Virtuel</h3>
                <p className="card-text">
                  The best laptop for programming needs to be a portable
                  machine. But it also needs to offer a comfortable keyboard,
                  speedy performance, and plenty of storage. And, while cores,
                  threads, and clock speeds are important, they shouldn’t be the
                  first thing you consider its so easi to learn.
                </p>
                <a href="#!" className="btn btn-info">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-secondary text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-person-square"></i>
                </div>
                <h3 className="card-title mb-3">Hybrid</h3>
                <p className="card-text">
                  Hybrid apps are a blend of both native and web solutions.
                  Where the core of the application is written using web
                  technologies. In this article we dive deep into hybrid app
                  development. To start the process, it’s important to remember
                  that picking the right solution for your next application.
                </p>
                <a href="#!" className="btn btn-info">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-md">
            <div className="card bg-secondary bg-gradient bg-opacity-75 text-light">
              <div className="card-body text-center">
                <div className="h1 mb-3">
                  <i className="bi bi-people"></i>
                </div>
                <h3 className="card-title mb-3">In Person</h3>
                <p className="card-text">
                  A computer programmer, sometimes called a software developer,
                  a programmer or more recently a coder is a person who creates
                  computer software. The term computer programmer can refer to a
                  specialist in one area of computers or to a generalist who
                  writes code for many kinds of software.
                </p>
                <a href="#!" className="btn btn-info">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Boxes;
