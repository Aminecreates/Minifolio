import tools from "../data/tools.json";
import "../styles/tools.scss";

function Tools() {
  return (
    <div className="tools-container">
      {tools.map((tool, index) => (
        <div key={index} className="tool">
          <img src={tool.toolImg} alt="" />
        </div>
      ))}
    </div>
  );
}

export default Tools;
