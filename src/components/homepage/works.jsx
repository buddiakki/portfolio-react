import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            <div className="work">
              <img
                src="https://media.licdn.com/dms/image/D560BAQG22o1HIOdYqg/company-logo_200_200/0/1683895925563/ascend_international_us_logo?e=1708560000&v=beta&t=5J_R5HGyJ97y1q0P3x75LB4BCsQdMwDILZsv1JQt624"
                alt="facebook"
                className="work-image"
              />
              <div className="work-title">Ascend International US</div>
              <div className="work-subtitle">Software Engineer</div>
              <div className="work-duration">August 2022 - Present</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
