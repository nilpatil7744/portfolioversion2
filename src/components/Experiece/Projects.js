import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/zono-icon.svg";
// import suicide from "../../Assets/Projects/suicide.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Experience() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          <strong className="purple">Professional </strong>Experience
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          {/* Here are a few  I've worked on recently. */}
        </p>
        <Row
          data-aos="fade-down"
          style={{ justifyContent: "center", paddingBottom: "10px" }}
        >
          <ProjectCard
            imgPath={chatify}
            isBlog={false}
            title="Junior Front-End Developer"
            description="ZONO is a layer of the business technology stack that brings people from distribution supply chains, data and business functions together at a single place where people can effectively work together, find important information, view and exchange data points at real time."
            link="https://github.com/nitinmp/zono-enterprise"
            linkmedium="https://www.zonoapp.com/index.html"
            linklive="https://app.zonoapp.com/login"
          />

          <Col md={5} className="project-card" data-aos="fade-right"></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
