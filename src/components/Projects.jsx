import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import ProjectCard from './ProjectCard';

import projImg1 from '../assets/img/project-img1.png';

import '../style-sheets/Projects.css'

function Projects() {

  const projects = [
    {
      title: "Wall posts",
      description: "Single page aplication that lets users add, delete and filter posts.",
      imgUrl: projImg1,
      url: "https://github.com/cosmicalduck/wall-posts",
    },
  ];

  return (
    <section id="projects" className="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p className='projects-p'>Here are some of the projects that I've worked on.</p>
          </Col>
          <Row>
            {
              projects.map((project, index) => {
                return <ProjectCard
                  key={index}
                  {...project} />
              })
            }
          </Row>
        </Row>
      </Container>
    </section>
  );

}

export default Projects;