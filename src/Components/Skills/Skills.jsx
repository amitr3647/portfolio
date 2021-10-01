import React from "react";
import "./Skills.css";
import Button from "react-bootstrap/Button";
import { Row, Col } from "react-bootstrap";
import { skillsets } from "../../Data";
export default function Skills() {
  return (
    <>
      <div className="skills">
        <div className="skills-head">
          <h1>SKILLS</h1>
        </div>
        <div className="skills-body">
          {skillsets.map((skillset) => (
            <div>
              <Row>
                <Col xs={4} className="col-left">
                  <ion-icon name={skillset.icon}></ion-icon>
                  <h2>{skillset.type}</h2>
                </Col>
                <Col xs={8}>
                  {skillset.skills.map((elem) => (
                    <Button variant={elem.but}>{elem.skill}</Button>
                  ))}
                </Col>
              </Row>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
