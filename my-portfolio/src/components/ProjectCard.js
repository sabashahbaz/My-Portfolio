import { Col } from "react-bootstrap";
import github from '../assets/github.bounce.pvg.svg'


export const ProjectCard = ({project}) => {
    return (
        // <Col >
            <div className="proj-imgbx">
                <img src={project.imgUrl}/>
                <div className="proj-txtx">
                    <div className="text">
                        <h4>{project.title}</h4>
                        <span>{project.description}</span>
                    </div>
               
                    <a href={project.githubLink} target="_blank">
                        <button className="github-button">
                        <div className="button-content">
                            <img className="github-icon" src={github}/>
                            <sm className="text">Github</sm>
                        </div>
                        </button>
                    </a>

                </div>
            </div>
        // </Col>
    )
}