import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import me from '../assets/img/myPic.jpg'
import whoAmI from '../assets/img/whoAmI.png'
import CSS from '../AboutMe.css'

export const AboutMe = () => {
    return (
        <div className="bg">
            <div className="content-container">
                <img className="my-pic" src={me} alt="My Picture" />
                <div className="text-container">
                <img className="who-am-I" src={whoAmI}/>
                <div className="about-text">
                    <p className="p">A passionate software engineer eager to begin her journey into the tech industry. I have recently graduated from Flatiron’s School Full-Stack Software Engineering bootcamp where I learned basic computer science and programming languages concepts. I am excited to join cross-functional teams to collaborate on projects to meet business needs.</p>
                </div>
                </div>
            </div>
            <Container className="skills-container">
                    <Row>
                        <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>dummy text</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            <div>
        </div>
    </div>
    )
}