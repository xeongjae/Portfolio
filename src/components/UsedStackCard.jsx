import React from "react";
import "./UsedStackCard.scss";

const UsedStackCard = ({ children, title, icon }) => {
  return (
    <div className="used-stack-card">
      <div>
        <div className="icon">{icon}</div>
        <div className="title-box">
          <h2 className="title">{title}</h2>
        </div>
        <div className="text">{children}</div>
      </div>
    </div>
  );
};

export default UsedStackCard;
