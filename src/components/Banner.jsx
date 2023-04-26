import React from "react";
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import headerImg from '../assets/img/header-img.png';
import '../style-sheets/Banner.css';

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [" Developer", " Creator"];

  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  return (
    <section className='banner' id='banner'>
      <Container>
        <Row className="d-flex justify-content-between">
          <Col xs={12} md={6} xl={5}>
            <span className="tagline">Welcome to my Portafolio</span>
            <h1>Hi! I'm Pato
              <span className="txt-rotate" dataperiod="1000"><span className="wrap">{text}</span></span>
            </h1>
            <p>Computer science engineer who loves developing web and mobile applications. I love learning new things and putting them into practice!</p>
          </Col>
          <Col xs={6} md={6} xl={5}>
            <img src={headerImg} alt="Astronaut with stars" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}


export default Banner;