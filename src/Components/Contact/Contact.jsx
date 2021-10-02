import "./Contact.css";
import logo from "../../Assets/about.png";
import { SocialIcon } from "react-social-icons";
export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-details">
        <div className="left-container">
          <img src={logo}></img>
        </div>
        <div className="right-container">
          <div className="bio-text">
            <h1>Reach out to me!</h1>
            <p>
              Discuss a project or just want to say hi? My inbox is open for
              all.
            </p>
            <strong>
              Front-end Developer👨‍💻|Open source contributor🔥|Tech Writer✍️
            </strong>
          </div>
          <div className="location" style={{ color: "blueviolet " }}>
            <ion-icon name="location-outline"></ion-icon>Patna,India
          </div>
          <div className="opportunity">Open for opportunities: Yes</div>
          <div className="social-links">
            <SocialIcon
              className="linkedin social-icon"
              url="https://www.linkedin.com/in/amit-kumar-6a5aa7118/"
            />
            <SocialIcon
              className="twitter social-icon"
              url="https://twitter.com/Lucifer52912819"
            />
            <SocialIcon
              className="facebook social-icon"
              url="https://www.facebook.com/profile.php?id=100003970472447"
            />
            <SocialIcon
              className="github social-icon"
              url="https://github.com/amitr3647"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
