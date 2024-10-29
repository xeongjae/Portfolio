import "./ProjectCard.scss";
import React from "react";

const ProjectCard = ({ Title, SubTitle, ImageSrc, Page, Tag, Target }) => {
  return (
    <div href={Page} className="project-card" target={Target}>
          <div className="img-box">
            <img
              src={ImageSrc}
              fill
              alt={Title}
              property="true"
              className="img"
            />
          </div>
          <div className="info">
            <h2 className="title">{Title}</h2>
            <div className="subtitle">{SubTitle}</div>
          </div>
          <div className="tag-container">
            {Tag.map((tag, i) => (
              <div key={i} className="tag">
                {tag}
              </div>
            ))}
          </div>
    </div>
  );
};

export default ProjectCard;
