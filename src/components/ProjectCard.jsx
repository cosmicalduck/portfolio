import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import '../style-sheets/ProjectCard.css';
import gitHubIcon from '../assets/img/github.svg';


function ProjectCard({ title, description, imgUrl, url }) {

  return (
    <Col size={12} sm={6} md={4}>
      <Card>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title className='title'>{title}</Card.Title>
          <Card.Text className='description'>{description}</Card.Text>
          <div className='card-links'>
            <Card.Link href={url}><img className='github-icon' src={gitHubIcon} alt="Github icon" /></Card.Link>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;