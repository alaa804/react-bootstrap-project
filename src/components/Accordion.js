import React from "react";

const Accordion = () => {
  return (
    <section id="questions" className="p-5">
      <div className="container">
        <h2 className="text-center mb-4 text p-3">
          Frequently Asked Questions
        </h2>
        <div className="accordion accordion-flush" id="questions">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed text1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-one"
              >
                Where exactly are you located?
              </button>
            </h2>
            <div
              id="question-one"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Web development is the building and maintenance of websites;
                it’s the work that happens behind the scenes to make a website
                look great, work fast and perform well with a seamless user
                experience.
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed text1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-two"
              >
                How much does it cost to attend?
              </button>
            </h2>
            <div
              id="question-two"
              class="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div class="accordion-body">
                Designing a website yourself is the cheapest option. The cost
                can range anywhere from a $100 to $3,000 or more. A simple
                custom website design from an agency can range from $15,000 to
                $30,000, whereas bigger and more complicated websites will cost
                between $40,000 to $75,000+.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed text1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-three"
              >
                What do I need to Know?
              </button>
            </h2>
            <div
              id="question-three"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                To become a Web Developer, you should have an understanding of
                HTML, CSS, and JavaScript. It's also recommended to learn about
                CSS and CSS frameworks. Developing these fundamental web
                development skills will give you the foundation and logic for
                communicating with programming languages.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed text1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-four"
              >
                How Do I sign up?
              </button>
            </h2>
            <div
              id="question-four"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Looking For The Top US Web Design Agency? 12+ Years Experience.
                Get In Touch Today. Professional Team. View Portfolio. In
                Business Since 2011. Locations: Scranton, Manassas, Binghamton.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed text1"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#question-five"
              >
                Do you help me find a job?
              </button>
            </h2>
            <div
              id="question-five"
              className="accordion-collapse collapse"
              data-bs-parent="#questions"
            >
              <div className="accordion-body">
                Whether you’re self-taught, a bootcamp grad or have a college
                degree, when you’re a fresh-faced web developer, landing that
                first job can be tricky. You know you’ve got the skills to do
                the job. The question is, how do you communicate that to hiring
                managers? How do you impress at the interview stage? How do you
                make sure you even get an interview in the first place?
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
