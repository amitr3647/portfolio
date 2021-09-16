import "./Header.css";
export default function Header() {
  return (
    <navbar>
      <div className="navBar">
        <a href="/">
          <h1>AMIT KUMAR</h1>
        </a>
        <ul>
          <li>
            <a href="/">
              <ion-icon name="home-outline"></ion-icon>
              Home
            </a>
          </li>
          <li>
            <a href="/about">
              <ion-icon name="man-outline"></ion-icon>
              About
            </a>
          </li>
          <li>
            <a href="/project">
              <ion-icon name="bookmark-outline"></ion-icon> Projects
            </a>
          </li>
          <li>
            <a href="/blog">
              <ion-icon name="clipboard-outline"></ion-icon>
              Blog
            </a>
          </li>
          <li>
            <a href="/contact">
              <ion-icon name="call-outline"></ion-icon>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </navbar>
  );
}
