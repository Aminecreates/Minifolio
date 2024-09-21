import "../App.scss";
import "../styles/header.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Header() {
  const headerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all",
      }
    );
  }, []);

  return (
    <div ref={headerRef} className="headline-paragraphe">
      <h1 className="headline">
        Hey, i’m{" "}
        <span className="name">
          <img src="imgs/cursor.svg" alt="" />
          Amine<div className="corner-br"></div>
          <div className="corner-tl"></div>
        </span>{" "}
        a Designer / Developer based in Tangier, Morocco.
      </h1>
      <p>
        Welcome to my little corner of the web! Here, I explore anything that
        sparks my interest — mainly design and code. Whether it's crafting a
        clean UI, experimenting with new tools, or solving coding challenges,
        I’m always eager to learn and grow. Have a look around and see what I’ve
        been up to!
      </p>
    </div>
  );
}

export default Header;
