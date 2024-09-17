import { useState } from "react";
import Header from "./components/header";
import Filters from "./components/filters";
import Projects from "./components/projects";
import Tools from "./components/tools";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [activeFilter, setActiveFilter] = useState("Projects");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    console.log(activeFilter);
  };
  return (
    <>
      <div className="wrapper">
        {/* <ThemeSwitch /> */}
        <div className="whiteshade"></div>
        <Header />
        <div className="divider"></div>
        <Filters
          activeFilter={activeFilter}
          handleFilterClick={handleFilterClick}
        />
        {activeFilter === "Projects" ? (
          <Projects />
        ) : activeFilter === "Tools" ? (
          <Tools />
        ) : null}
        <Footer />
        <div className="bottom-black-shade"></div>
      </div>
    </>
  );
}

export default App;
