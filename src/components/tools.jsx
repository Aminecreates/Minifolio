import tools from "../data/tools.json";
import "../styles/tools.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function Tools() {
  const toolRef = useRef([]);
  useEffect(() => {
    gsap.fromTo(
      toolRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all",
      }
    );
  }, []);

  return (
    <div className="tools-container">
      {tools.map((tool, index) => (
        <div
          ref={(el) => (toolRef.current[index] = el)}
          g
          key={index}
          className="tool"
        >
          <img src={tool.toolImg} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Tools;
