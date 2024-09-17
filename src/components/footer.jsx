import "../styles/footer.scss";
import { GithubLogo, LinkSimple } from "phosphor-react";

function Footer() {
  return (
    <div className="footer-container">
      <p> © 2024 Aminecreates</p>
      <div className="social-icons">
        {" "}
        <div className="icon-container">
          <GithubLogo size={20} color="#a0a0a0" />
        </div>{" "}
        <div className="icon-container">
          <LinkSimple size={20} color="#a0a0a0" />
        </div>{" "}
      </div>
    </div>
  );
}

export default Footer;
