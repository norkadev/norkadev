import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import java from "../assets/img/java.jpg";
import reactjs from "../assets/img/reactjs.jpg";
import vuejs from "../assets/img/vuejs.jpg";
import rn from "../assets/img/rn.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const javaProjects = [
    {
      title: "OAuth2 Login",
      description: "JAVA 8, SPRING BOOT, OAUTH2",
      imgUrl: java,
    },
    {
      title: "Courses CRUD",
      description: "SPRING BOOT, REACTJS, BOOTSTRAP",
      imgUrl: java,
    },
  ];
  const reactProjects = [
    {
      title: "Calculator",
      description: "REACTJS, FRAMER MOTION, MATERIAL UI",
      imgUrl: reactjs,
    },
    {
      title: "Courses CRUD - complete",
      description: "REACTJS, REACT QUERY",
      imgUrl: reactjs,
    },
  ];

  const vueProjects = [
    {
      title: "Weather App",
      description: "-",
      imgUrl: vuejs,
    },
    {
      title: "Github Info",
      description: "-",
      imgUrl: vuejs,
    },
  ];

  const rnProjects = [
    {
      title: "Weather App",
      description: "REACTJS, FRAMER MOTION, MATERIAL UI",
      imgUrl: rn,
    },
    {
      title: "My Avatar",
      description: "REACTJS, REACT QUERY",
      imgUrl: rn,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p></p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Java</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">ReactJs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">VueJs</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth">RN</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {javaProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {reactProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {vueProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {rnProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
