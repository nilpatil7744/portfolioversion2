import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/Clockify.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/FOOD_EXPRESS.png";
import chatify from "../../Assets/Projects/Tripvillas.png";
// import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Animoto.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Tripvilas Clone "
              description="Tripvillas is one of Asia's largest Holiday Home Rental Companies where owners of private homes could create a simple profile for their property and then correspond with like minded families who would be interested in staying in their homes as an alternate to hotels."
              link="https://github.com/nilpatil7744/tripvillas"
              linkmedium="https://nilp7744.medium.com/project-on-tripvillas-clone-5aceeccfc215"
              linklive="https://6106ec6b42afb7f9d8a252bb--tripvillas-clone.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Clockify Clone"
              description="Clockify is the only 100% free time tracking software on the market. It’s so simple that you and your team can track work time with one click. Everything in Clockify revolves around time entries. You track the time you spend working on things and then analyze workweeks in reports. Clockify also lets you invite others so you can track and analyze time together."
              link="https://github.com/nilpatil7744/team_oxygen"
              linkmedium="https://nilp7744.medium.com/project-on-clockify-clone-d6fa18977d4a"
              linklive=""
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="FoodExpress Clone"
              description="FoodXprs Lunch Services Pvt Ltd is an online Lunch Services provider based out of Hyderabad. At Food Xprs we understand that freshly cooked food is both healthier and tastier than food which has been prepared, kept & reheated. To maintain your health always insist on having freshly cooked food."
              link="https://github.com/ankitbajpai1607/FoodXprs_clone"
              linkmedium=""
              linklive="https://foodxprs.netlify.app/order-online.html"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Animoto Clone"
              description="Animoto is a cloud-based video creation service that produces video from photos, video clips, and music into video slideshows,and customized web-based presentations."
              link="https://github.com/nilpatil7744/Project_Damodar"
              linkmedium="https://nilp7744.medium.com/masai-collaboration-project-animoto-clone-fec2a84b2f8b"
              linklive=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
