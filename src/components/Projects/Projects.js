import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeeditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import tinder from "../../Assets/Projects/tinder.png";
import facebook from "../../Assets/Projects/facebook.png";
import counter from "../../Assets/Projects/counter.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="flipkart-clone"
              description="It uses React js as library in which Material Ui used for Icon selection 
              and Heroku used for hosting along with Redux concept."
              link="http://ecommercecodeforweb.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="airbnb-clone"
              description="It uses React js as library in which Firebase used hosting along with material UI."
              link="https://airbnb-clone-f988f.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="netflix-clone"
              description="It uses React js as library in which TMDB used for fetching API keys and 
              and Firebase used for hosting along with material UI."
              link="https://netflix-clone-1ea66.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Google-clone"
              description="It uses React js as library in which Firebase used hosting along with material UI."
              link="https://clone-2c5fb.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Temperature converter"
              description="It uses HTML, CSS, Javascript."
              link=" https://mdzahidiqbal.github.io/Temperature-Converter.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Stopwatch"
              description="It uses HTML, CSS, Javascript."
              link=" https://mdzahidiqbal.github.io/Stopwatch.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tinder}
              isBlog={false}
              title="tinder-clone"
              description="It uses React js as library in which Firebase used hosting along with material UI."
              link="https://tinder-clone-c17c9.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facebook}
              isBlog={false}
              title="facebook-clone"
              description="It uses React js as library in which Firebase used hosting along with material UI."
              link="https://facebook-clone-d006a.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={counter}
              isBlog={false}
              title="Word counter"
              description="It uses HTML, CSS, Javascript."
              link=" https://mdzahidiqbal.github.io/Wordcounter.github.io/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
