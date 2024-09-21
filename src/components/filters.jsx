import "../styles/filters.scss";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Filters({ activeFilter, handleFilterClick }) {
  const filtersRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      filtersRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2.25,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all",
      }
    );
  }, []);

  return (
    <div ref={filtersRef} className="filters-container">
      <div className="filter-tab">
        <div
          className={`projects filter ${
            activeFilter === "Projects" ? "active" : ""
          }`}
          onClick={() => handleFilterClick("Projects")}
        >
          Projects
        </div>
        <div
          className={`tools filter ${activeFilter === "Tools" ? "active" : ""}`}
          onClick={() => handleFilterClick("Tools")}
        >
          Tools
        </div>
      </div>
      <div className="filter-label"> {activeFilter}</div>
    </div>
  );
}

export default Filters;
