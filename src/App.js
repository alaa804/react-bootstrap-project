import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Newsletter from "./components/Newsletter";
import Boxes from "./components/Boxes";
import Register from "./components/Register";
import Learn from "./components/Learn";
import LearnReact from "./components/LearnReact";
import Accordion from "./components/Accordion";
import Instructors from "./components/Instructors";
import EmailMe from "./components/EmailMe";
import ContactMap from "./components/ContactMap";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <Navbar />
                <Showcase />
                <Newsletter />
                <Boxes />
                <Learn />
                <LearnReact />
                <Accordion />
                <Instructors />
                <EmailMe />
                <ContactMap />
                <Footer />
              </Fragment>
            )}
          />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
