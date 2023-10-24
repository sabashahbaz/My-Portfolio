import { Col } from "react-bootstrap";

export const ProjectCard = ({project}) => {
    return (
        <Col sm={6} md={7}>
            <div className="proj-imgbx">
                <img src={project.imgUrl}/>
                <div className="proj-txtx">
                    <div className="text">
                        <h4>{project.title}</h4>
                        <span>{project.description}</span>
                    </div>
                </div>
            </div>
        </Col>
    )
}