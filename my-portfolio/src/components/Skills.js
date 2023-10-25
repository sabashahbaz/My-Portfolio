
import { Container, Row, Col } from "react-bootstrap";
import js from '../assets/skillsIcons/icons8-javascript.svg'
import react from '../assets/skillsIcons/react.svg'
import tailwind from '../assets/skillsIcons/tailwind.svg'
import bootstrap from '../assets/skillsIcons/bootstrap.svg'
import html from '../assets/skillsIcons/html.svg'
import css from '../assets/skillsIcons/css.svg'
import python from '../assets/skillsIcons/python.svg'
import flask from '../assets/skillsIcons/flask.svg'
import mongodb from '../assets/skillsIcons/mongodb.png'
import node from '../assets/skillsIcons/nodejs.svg'
import sql from '../assets/skillsIcons/sql.png'
import postgresql from '../assets/skillsIcons/postgresql.svg'
import figma from '../assets/skillsIcons/figma.svg'
import git from '../assets/skillsIcons/git.svg'
import json from '../assets/skillsIcons/json-web-token.svg'
import vsCode from '../assets/skillsIcons/vscode.svg'
import mac from '../assets/skillsIcons/macos.svg'
import me from '../assets/skillsIcons/melaptop.png'
import softskills from '../assets/skillsIcons/ss.png'

export const Skills = () => {

        return (
            <>
            <div className="skills-header">
            <h1 className="front-header">Front-End</h1>
            <h1 className="front-header">Back-End</h1>
            </div>
            <div className="skills-center">
            <div className="skills-container">
            {/* <h1 className="front-header">Front-End</h1> */}
            <Container className="front-skills-container">
                    <Row>
                        <Col>
                        <div className="skill-bx">
                        <img src={js}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                            <img src={react}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                            <img src={tailwind}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <div className="skill-bx">
                        <img src={bootstrap}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                        <img src={html}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                        <img src={css}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                    </Row>
                </Container>

                {/* <h1 className="front-header">Back-End</h1> */}
            <Container className="back-skills-container">
                    <Row>
                        <Col>
                        <div className="skill-bx">
                        <img src={python}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                            <img src={flask}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                            <img src={node}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        </Row>
                        <Row>
                        <Col>
                        <div className="skill-bx">
                        <img src={mongodb}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                        <img src={sql}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="skill-bx">
                        <img src={postgresql}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                    </Row>
                </Container>
            </div>


            </div>
          
            <h1 className="tools-header">Development Tools</h1>
            <Container>
                <Row>
                <Col>
                        <div className="tool-bx">
                        <img className="tool-icon" src={figma}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="tool-bx">
                        <img className="tool-icon" src={git}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="tool-bx">
                        <img className="tool-icon" src={json}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="tool-bx">
                        <img className="tool-icon" src={vsCode}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                        <Col>
                        <div className="tool-bx">
                        <img className="tool-icon" src={mac}/>
                            <p>dummy text</p>
                        </div>
                        </Col>
                </Row>
            </Container>
            <div className= "ss-img-container">
                <img className= "ss-img" src={softskills}/>        
            </div>
            <div className= "soft-skills">
                <div className="soft-skills-text">
                    <p>team player</p>
                    <p>detail oriented</p>
                    <p>creative</p>
                </div>
               
                <img className= "me" src={me}/>
                <div className= "soft-skills-text">
                    <p>ambitious</p>
                    <p>problem-solver</p>
                    <p>critical thinker</p>
                </div>

            </div>
            
            </> 
        )
    };
