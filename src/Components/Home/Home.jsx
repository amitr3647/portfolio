import "./Home.css";
import Typed from "react-typed";
import homeLogo from "../../Assets/avatar.svg";
export default function () {
  return (
    <div className="homeContent">
      <div className="welcome">
        <div className="welcome-head"></div>
        <Typed
          strings={[
            "Hello world!<br>I'm Amit.<br><br>Human since...1996<br>Programmer since...2021<br><br><br>Look around to know more.",
          ]}
          typeSpeed={80}
          style={{ color: "red", letterSpacing: "3px", lineHeight: "25px" }}
        />
      </div>
    </div>
  );
}
