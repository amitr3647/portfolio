import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { projects } from "../../Data";
import "./Project.css";
import Button from "react-bootstrap/Button";

export default function Project() {
  return (
    <div className="project">
      <VerticalTimeline>
        {projects.map((project) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--education "
            date={project.date}
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={<ion-icon name="school-outline"></ion-icon>}
          >
            <div className="project-box" style={{ textAlign: "center" }}>
              <h3
                style={{ paddingBottom: "15px" }}
                className="vertical-timeline-element-title"
              >
                <a link href={project.url}>
                  {project.topic}
                </a>
              </h3>
              {project.technology.map((elem) => (
                <Button variant="outline-secondary" size="sm">
                  {elem}
                </Button>
              ))}
              <p style={{ padding: "15px 0", fontWeight: "300" }}>
                {project.desc}
              </p>
            </div>
          </VerticalTimelineElement>
        ))}

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<ion-icon name="star-outline"></ion-icon>}
        />
      </VerticalTimeline>
    </div>
  );
}
