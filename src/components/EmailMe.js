import React, { useRef, useEffect, useState } from "react";
import "react-notifications/lib/notifications.css";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const EmailMe = () => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    // INIT SCROLL
    AOS.init({
      offset: 400,
      duration: 1000,
    });
  });

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_btlhr2s",
        "template_3scdke9",
        formRef.current,
        "user_JcoCN8JCzXUimMTFHTGlJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          NotificationManager.success("email sended!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className=" bg-dark text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between text-center">
          <div className="p" style={{ marginRight: "70px" }}>
            <h2 style={{ marginBottom: "30px" }} className="lead fs-1">
              My Pleasure To Contact Me !
            </h2>
            <p className="lead">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions and i will create your own project.
            </p>
          </div>
          <div className="form-group" style={{ marginTop: "150px" }}>
            <NotificationContainer />
            <form ref={formRef} onSubmit={handleSubmit} data-aos="fade-left">
              <input
                className="input text1"
                type="text"
                placeholder="Name"
                name="user_name"
              />
              <input
                className="text1"
                type="text"
                placeholder="Subject"
                name="user_subject"
              />
              <input
                className="text1"
                type="email"
                placeholder="Email"
                name="user_email"
              />
              <textarea
                className="text1"
                rows="5"
                placeholder="Message"
                name="message"
              />
              <button className="b text1" type="submit">
                Send
              </button>{" "}
              {""}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailMe;
