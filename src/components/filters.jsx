import "../styles/filters.scss";

function Filters({ activeFilter, handleFilterClick }) {
  return (
    <div className="filters-container">
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
