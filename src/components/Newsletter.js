import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-secondary bg-gradient bg-opacity-75 text-light p-5">
      <div className="container">
        <div className="d-md-flex justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0 text2">Sign Up For Our Newsletter</h3>
          <div class="input-group mb-3 news-input">
            <input
              type="text"
              class="form-control"
              placeholder="Enter Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-dark btn-lg" type="button">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
