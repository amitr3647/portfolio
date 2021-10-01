import "./About.css";
import logo from "../../Assets/image.svg";
import Skills from "../Skills/Skills";
export default function About() {
  return (
    <div className="about">
      <div className="about-me">
        <div className="about-me-head">
          <img src={logo} style={{ height: "8rem" }}></img>
          <div className="social-icons">
            <ul>
              <a href="https://twitter.com/Lucifer52912819" target="_blank">
                {" "}
                <li>
                  <ion-icon name="logo-twitter"></ion-icon>
                </li>{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/amit-kumar-6a5aa7118/"
                target="_blank"
              >
                {" "}
                <li>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </li>{" "}
              </a>
              <a href="https://github.com/amitr3647" target="_blank">
                {" "}
                <li>
                  <ion-icon name="logo-github"></ion-icon>
                </li>{" "}
              </a>
            </ul>
          </div>
        </div>
        <div className="about-me-body">
          <p>
            I like to explore codes of popular repositories to discover new
            tools and practices. I have a growing obsession for beautiful code
            and sometimes piss off people in the process.
            <br />
            <br />
            I'm Bachelor in Mechanial Engineering from BIT Mesra. I love playing
            and watching cricket.I am also an avid non-fiction reader.
          </p>
        </div>
        <hr style={{ borderTop: "1px dashed ", borderTopColor: "gray" }}></hr>
        <div className="resume">
          <a href="#" target="_blank">
            <ion-icon name="newspaper-outline"></ion-icon>
            Resume
          </a>
        </div>
      </div>
      <Skills />
    </div>
  );
}
