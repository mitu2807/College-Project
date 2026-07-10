import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Particle from "../Particle";

import Logo from "../../Assets/Projects/moneytrail-logo.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section" style={{ minHeight: "91vh" }}>
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is project I've worked on recently.
        </p>
        <Row>
          <Col md={4}>
            <div>
              <img style={{ height: 200 }} src={Logo} alt="my-project-img" />
            </div>
          </Col>
          <Col md={8}>
            <div style={{ color: "white", textAlign: "left", marginLeft: 40 }}>
              <h3 className="purple">Expense tracker</h3>
              <p>
                Add and manage expenses by category, payment method, and person.
                Track personal expenses, borrowed money, and expenses made for
                others. • Visualize spending patterns through category-wise
                graphs and analytics. • Apply filters based on date ranges and
                category combinations. • Support custom expense categories and
                additional expense management features. • Developed using modern
                web technologies with a focus on usability and data
                visualization.
              </p>
            </div>
          </Col>
        </Row>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aA}
              isBlog={false}
              title="Expense Tracker"
              description="• Add and manage expenses by category, payment method, and person.
• Track personal expenses, borrowed money, and expenses made for others.
• Visualize spending patterns through category-wise graphs and analytics.
• Apply filters based on date ranges and category combinations.
• Support custom expense categories and additional expense management
features.
• Developed using modern web technologies with a focus on usability and data
visualization."
            />
          </Col>
        </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
