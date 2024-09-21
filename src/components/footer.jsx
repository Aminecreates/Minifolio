import "../styles/footer.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { GithubLogo, LinkSimple, TwitterLogo } from "phosphor-react";

function Footer() {
  const footersRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      footersRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3.5,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all",
      }
    );
  }, []);

  return (
    <div ref={footersRef} className="footer-container">
      <p> © 2024 Aminecreates</p>
      <div className="social-icons">
        {" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-container"
        >
          <GithubLogo size={20} color="#a0a0a0" />
        </a>{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-container"
        >
          <LinkSimple size={20} color="#a0a0a0" />
        </a>{" "}
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-container"
        >
          <TwitterLogo size={20} color="#a0a0a0" />
        </a>{" "}
      </div>
    </div>
  );
}

export default Footer;
