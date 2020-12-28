import React,{Component} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import KadroLogo from './img/KadroLogo.svg'
import AmazonSumerianLogo from './img/AmazonSumerianLogo.jpg'
import AWSIoT from './img/AWSIoT.png'
import { Container } from 'react-bootstrap'

export default class About extends Component {

  render() {
    return (
      <div className="content">
        <h2>About Me</h2>
        <p>
          I am a professional software development engineer based in Seattle, WA.
          For more information about my experience, check out my <a href="https://www.linkedin.com/in/zachgiordano/">LinkedIn</a> page.
        </p>
        <h3>Work Experience</h3>
        {JobCarousel()}
        <p>Work In Progress...</p>
      </div>
    )
  }
}

function JobCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={KadroLogo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Kadro Solutions - Software Development Co-op</h3>
          <p>I worked for Kadro as a Software Developer as a part of the NCSU co-op program.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AmazonSumerianLogo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Amazon Sumerian - SDE Intern</h3>
          <p>I interned at Amazon during summer 2018 as a software development engineer on the AWS Sumerian (AR/VR) team.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={AWSIoT}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>AWS IoT Greengrass - SDE</h3>
          <p>Software Development Engineer for AWS IoT Greengrass working on Cloud side operations.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
