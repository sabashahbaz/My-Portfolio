import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import {Skills} from './Skills'
import me from '../assets/img/myPic.jpg'
import whoAmI from '../assets/font/whoAmI.png'
import technicalSkills from '../assets/font/technicalskills.png'

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
            <div className="technical-skills">
                <img className="technical-skills-image" src = {technicalSkills}/> 
            </div>
            <Skills/>
            <div>
        </div>
    </div>
    )
}