import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Project from "./Components/Project/Project";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Home /> */}

          <Route path="/about" component={About} />
          {/* <About /> */}

          <Route path="/contact" component={Contact} />
          {/* <Contact /> */}

          <Route path="/project" component={Project} />
          {/* <Project /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
