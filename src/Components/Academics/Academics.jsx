import React from "react";
import "./Academics.css";
import { academics } from "../../Data.jsx";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
export default function Academics() {
  return (
    <div className="academics">
      <VerticalTimeline>
        {academics.map((academic) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--academic"
            date={academic.date}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<ion-icon name="school-outline"></ion-icon>}
          >
            <div className="project-box" style={{ textAlign: "center" }}>
              <h3
                style={{ paddingBottom: "15px" }}
                className="vertical-timeline-element-title"
              >
                {academic.institute}
              </h3>
              <p>{academic.education}</p>

              <p>{academic.location}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}
