import {ProjectCard} from './ProjectCard'
import thrifty from '../assets/img/thrifty.gif'
import tastytracker from '../assets/img/tasty-tracker-demo.gif'
import magicalduel from '../assets/img/magical_duel.gif'
import '../CSS/projectcard.css';


export const Projects = () => {
    const projects = [
        {
            title: "Thrifty",
            description: "a sophisticated shopping app that integrates the Poshmark API, offering users a seamless platform to purchase and sell second-hand clothing.",
            imgUrl: thrifty,
            githubLink: "https://github.com/sabashahbaz/Thrifty",
        },
        {
            title: "TastyTracker",
            description: "a comprehensive full-stack application designed to allow users to seamlessly track caloric intake",
            imgUrl: tastytracker,
            githubLink: "https://github.com/sabashahbaz/TastyTracker",
        },
        {
            title: "Magical Duel",
            description: "a 2D game built with python and pygame, utiliziing the principles of object oriented programming",
            imgUrl: magicalduel,
            githubLink: "https://github.com/sabashahbaz/Magical_Duel",
        },
    ]
    return (
        <section className="project" id="project">
            <h2>Projects</h2>
            <p className="projects-p">Hover over image for more details</p>
                <div className="project-container">
                {projects.map((project,index) => {
                        return(
                            <ProjectCard
                            key={index}
                            project={project}/>
                            )
                        })
                    }
                </div>
        </section>
    )
}