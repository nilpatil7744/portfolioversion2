import React from "react";
import Card from "react-bootstrap/Card";
import { AiFillGithub, AiFillMediumCircle } from "react-icons/ai";
import { RiLiveLine } from "react-icons/ri";

import "./proj.css";
import { Col } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <br />
      <Card.Title>
        <a
          href={props.linklive}
          target="_blank"
          style={{ color: "whitesmoke", fontWeight: "bolder", fontSize: 22 }}
        >
          {props.title}
        </a>
      </Card.Title>
      <h5 data-aos="fade-right" style={{ fontWeight: "bolder", fontSize: 18 }}>
        <strong className="purple">Start Date : </strong> August 2021 - Present
      </h5>
      <Card.Img
        src={props.imgPath}
        alt="card-img"
        style={{ height: "250px" }}
      />
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        <Card.Text style={{ textAlign: "justify" }}>
          <h4 style={{ color: "#C770F0" }}>Areas of Responsibility</h4>
          <ul>
            <li
              className="about-activity"
              style={{ fontWeight: "bolder", fontSize: 18 }}
            >
              <ImPointRight /> Developed ZONO Enterprise apps Threads component
              for real-time conversation and solving the communication issue
              with react-native for the website as well as mobile.
            </li>
            <li
              className="about-activity"
              style={{ color: "white", fontWeight: "bolder", fontSize: 18 }}
            >
              <ImPointRight /> Developed Various screens for the
              Field-collection app such as Login, OTP, HomeScreen, and
              Collection screen.
            </li>
            <li
              className="about-activity"
              style={{ color: "white", fontWeight: "bolder", fontSize: 18 }}
            >
              <ImPointRight /> Resolved Various Production issues on priority
              with debugging the root cause.
            </li>
            <li
              className="about-activity"
              style={{ color: "white", fontWeight: "bolder", fontSize: 18 }}
            >
              <ImPointRight /> Refactored ZONO Enterprise Apps various
              components code better performance and clean writing.
            </li>
            <li
              className="about-activity"
              style={{ color: "white", fontWeight: "bolder", fontSize: 18 }}
            >
              <ImPointRight /> Debugged ZONO Enterprise apps core chat
              functionality and improved history message update as well as
              real-time message update and added functionality in chat such as
              leave chat, show recent message time, and unread message count.
            </li>
          </ul>
        </Card.Text>

        <Col md={12} className="home-about-social">
          <h1></h1>
          <p>
            Find<span className="purple"> More </span>below
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={props.linkmedium}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillMediumCircle />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={props.linklive}
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <RiLiveLine />
              </a>
            </li>
          </ul>
        </Col>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
