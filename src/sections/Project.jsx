import "./Project.scss";
import React from "react";
import ProjectCard from "../components/ProjectCard";
import { ListChart } from "../library/ProjectCardData";

function Project() {
  return (
    <div className="project">
      <div className="title-box">
        <h1 className="tit">Project</h1>
      </div>
      <div className="contents-box">
        <div className="contents">
          <div className="grid-container">
            {ListChart.filter((el) => el.Type === "웹").map((items, idx) => (
              <ProjectCard
                key={idx}
                Title={items.Title}
                SubTitle={items.SubTitle}
                ImageSrc={items.ImageSrc}
                Page={items.Page}
                Tag={items.Tag}
                Target={items.Target}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
