import {Container, Nav, Tab,Row, Col} from "react-bootstrap"
import {ProjectCard} from './ProjectCard'
import colorSharp2 from "../assets/img/color-sharp2.png"
import ProjImg1 from '../assets/img/project-img1.png'
import ProjImg2 from '../assets/img/project-img2.png'
import ProjImg3 from '../assets/img/project-img3.png'


export const Projects = () => {
    const projects = [
        {
            title: "business Startup",
            description: "Design & development",
            imgUrl: ProjImg1,
        },
        {
            title: "business Startup",
            description: "Design & development",
            imgUrl: ProjImg2,
        },
        {
            title: "business Startup",
            description: "Design & development",
            imgUrl: ProjImg3,
        },
        {
            title: "business Startup",
            description: "Design & development",
            imgUrl: ProjImg1,
        },
    ]
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>dummy text</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" >
                                    <Row>
                                        {
                                            projects.map((project,index) => {
                                                return(
                                                    <ProjectCard
                                                    key={index}
                                                    {...project}/>
                                                )
                                            })

                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"> text</Tab.Pane>
                                <Tab.Pane eventKey="third">text </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>

        </section>
    )
}