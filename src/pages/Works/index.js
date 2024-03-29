import React, { useState } from "react";
import { projects } from "./data";
import Title from "../common/Title";
import WorkItem from "./Item";
import WorksMenu from "./Menu";

const initalState = projects.filter((p) => p.type === "django");

const Works = () => {
  const [selectedProjects, setSelectedProjects] = useState(initalState);
  const [selectedType, setSelectedType] = useState("django");

  function handleMenuChange(type) {
    setSelectedProjects(projects.filter((p) => p.type === type));
    setSelectedType(type);
  }

  return (
    <div className="page" id="works">
      <Title>Projects</Title>
      <WorksMenu
        items={["django", "react", "DRF"]}
        selected={selectedType}
        clicked={handleMenuChange}
      />
      <div className="row">
        {selectedProjects.map((item) => (
          <div className="column" style={{ flex: '0 0 50%' }} key={item.sourceCodeLink}>
            <WorkItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;
