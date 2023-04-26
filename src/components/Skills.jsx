import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../style-sheets/Skills.css';


function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img alt="React" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img alt="Node.js" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <h5>Node.js</h5>
                </div>
                <div className="item">
                  <img alt="Express" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img alt="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img alt="PostgreSQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img alt="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img alt="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img alt="CSS3" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img alt="Flutter" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
                  <h5>Flutter</h5>
                </div>
                <div className="item">
                  <img alt="Firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
                  <h5>Firebase</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;