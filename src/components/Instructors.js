import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Instructors = () => {
  useEffect(() => {
    // INIT SCROLL
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  });

  return (
    <section
      id="instructors"
      className="p-5"
      style={{ backgroundColor: "#10b9b9" }}
    >
      <div className="container">
        <h2 className="text-center text-white">Our Instructors</h2>
        <p className="lead text-center text-white mb-5 text1">
          Our Instructors all have 5+ years working as a web developer in this
          big industry
        </p>
        <div className="row g-4">
          <div className="col-md-6 col-lg-3" data-aos="fade-right">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">John Doe</h3>
                <p className="card-text text1">
                  John is one of our many instructors at our Hackerspace in
                  boston Always close to his students, he teaches them web
                  development. Born in detroit where he spent most of his
                  life,John studied to be a Senior computer and communication
                  engineer at the faculty of engineering at us University.
                </p>
                <a href="#!">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-right">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/11.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">mary Johnson</h3>
                <p className="card-text text1">
                  mary Johnson is a Google Developer Expert in Google Workspace
                  and Google Apps Script. He holds an engineering degree in
                  Computer Science (I.I.T.) and is the first professional
                  blogger in lodon. He is the developer of Mail Merge for Gmail
                  and Document Studio. Read more on Lifehacker and YourStory
                </p>
                <a href="#!">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-left">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Steve Smith</h3>
                <p className="card-text text1">
                  steve one of our many instructors at our Hackerspace in
                  amercia Always close to his students, he teaches them web
                  development. Born in detroit where he spent most of his
                  life,John studied to be a Senior computer and communication
                  engineer on compuer science in harvard.
                </p>
                <a href="#!">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-left">
            <div className="card bg-light">
              <div className="card-body text-center">
                <img
                  src="https://randomuser.me/api/portraits/women/12.jpg"
                  alt=""
                  className="rounded-circle mb-3"
                />
                <h3 className="card-title mb-3">Sara Walson</h3>
                <p className="card-text text1">
                  Sara is one of our many instructors she is passionated in web
                  develomenet Always try to innovate in her work, he teaches.
                  Born in french where he spent most of his life,Sara studied to
                  be a Senior computer and communication engineer at the faculty
                  of engineering at us University.
                </p>
                <a href="#!">
                  <i className="bi bi-twitter text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-facebook text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
                <a href="#!">
                  <i className="bi bi-instagram text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;
